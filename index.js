var express = require('express'); // Get the module
//var cookieParser = require('cookie-parser');
var app = express(); //
//app.use(cookieParser());
var path = require('path');

//var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

const retryLimit = 10;
const defaultCursorBuffer = 5;
const controlBuffer = 7;

var players = [];
var commandsStack = [];
var gameobjs = [];
var field = [];   // fieldWidth*fieldHeight  [GameObject 'objecttype']

var topScores = [];
var topCoresLimit = 10;

var fieldWidth = 100;
var fieldHeight = 50;
var spawnMargin = 10;
var userId = 10;
var gameUpdateDelay = 120;
var lastGameObjId = 100;
var bonusLimit = 25;
var bonusCount = 0;
var bonusDelay = 5; // in game ticks
var bonusesTypes = [
    {color: "green", grow: 1, score: 5, type: 'bonus'},
    {color: "yellow", grow: 3, score: 10, type: 'bonus'},
    {color: "white", grow: 5, score: 15, type: 'bonus'}
];

var gamePaused = false;
var tickNumber = 0;
var lastScoreWrite = 1;

var config = {port: 3000};

var cDir = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
};
var cDirRev = {
    0: 'up',
    1: 'right',
    2: 'down',
    3: 'left',
};

// abstraction XD
function log(stuff) {
    console.log(stuff);
}

var WRITE_TOP_SCORE_TIMELIMIT = 1000;

//var SECRETKEY = 'Hhyu768mnb3909jVBjjk0kjj5Yj22kKM';

function initConfig() {
    log("Reading config");
    try {
        var configFile = fs.readFileSync(__dirname + '/config/snakes.conf', 'utf8', 'r');
        if (typeof(configFile) === 'undefined' || configFile == null) {
            writeConfig();
        }
        else {
            config = JSON.parse(configFile);
        }
    }
    catch (err) {
        writeConfig();
    }
    return configFile;
}

function initTopScores(configFile) {
    log("Loading top scores");
    try {
        var topScoreFile = fs.readFileSync(__dirname + '/data/snakes.score', 'utf8', 'r');
        if (typeof(topScoreFile) !== 'undefined' || topScoreFile != null) {
            //log(topScoreFile);
            topScores = JSON.parse(topScoreFile);
            topScores.sort(function (a, b) {
                return (b.score - a.score);
            });
            //log(topScores);
        }
    }
    catch (err) {
        log("Error reading /data/snakes.score");
    }
}


function init() {
    initConfig();
    initTopScores();

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'jslib')));

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    http.listen(config.port, function () {
        log('listening on *:' + config.port);
        field = getClearField();
    });
}

function writeConfig() {
    log("writeConfig");
    log(config);
    fs.writeFileSync(__dirname + '/config/snakes.conf', JSON.stringify(config));
}


init();


function Point(x, y) {
    this.x = x;
    this.y = y;
}

function CellValue(id, type, color) {
    this.id = id;
    this.color = color;
    this.type = type;
}

function getNextObjId() {
    lastGameObjId++;
    return (lastGameObjId);
}

function adjustPoint(point, direction, threshold) {
    threshold = threshold || 0;
    if (direction == cDir.up) return new Point(point.x, point.y - (1 + threshold));
    if (direction == cDir.down) return new Point(point.x, point.y + (1 + threshold));
    if (direction == cDir.left) return new Point(point.x - (1 + threshold), point.y);
    if (direction == cDir.right) return new Point(point.x + (1 + threshold), point.y);
}


//----------------------------------------
function newBonus() {
    //log("newBonus");
    var point = randomAvailablePoint(0, 0, 0);	// get free point and check than [count] cell on the direction is free too
    if (typeof(point) === "undefined" || point === null) {
        log("Unable to find space for bonus");
        return null;
    }
    var bonus = new Object();
    var bonusIdx = Math.round(Math.random() * (bonusesTypes.length - 1));
    bonusType = bonusesTypes[bonusIdx];
    bonus.id = getNextObjId();
    bonus.type = 'bonus';
    bonus.body = [];
    bonus.body.push(point);
    bonus.score = bonusType.score;
    bonus.grow = bonusType.grow;
    bonus.color = bonusType.color;
    bonusCount++;
    gameobjs.push(bonus);
    setFieldData(point, bonus.id, bonus.type, bonus.color);
    return (bonus);
}

function deleteBonus(id) {
    log("deleteBonus   id=" + id);
    bonusCount--;
    var i = getObjIndexById(id);
    gameobjs.splice(i, 1);
}


//-----------------------------------------------
function newSnake(player) {
    log("newSnake");
    var snake = new Object();

    snake.id = getNextObjId();
    snake.player = player;
    snake.type = 'snake';
    snake.body = [];
    snake.status = 'alive';
    snake.direction = Math.floor(Math.random() * 3);
    snake.update = snakeUpdate;
    snake.grow = 0;

    //var point = randomAvailablePoint(snake.direction, 10, fieldWidth);	// get free point and check than [count] cell on the direction is free too

    var snakePoint = getRandomCellForSnake(10, retryLimit);
    var point = snakePoint.point;
    snake.direction = snakePoint.direction;

    log("got random point: x=" + point.x + "  y=" + point.y);
    if (typeof(point) === "undefined" || point === null) {
        log("Unable to create snake for player");
        throw "No free space to create snake. Please retry later.";
    }
    var nextPoint = adjustPoint(point, snake.direction);//  movePoint();
    snake.body.push(nextPoint);
    setFieldData(nextPoint, snake.id, snake.type, player.color);
    snake.body.push(point);
    setFieldData(point, snake.id, snake.type, player.color);
    gameobjs.push(snake);

    log("new snake created");
    return (snake);
}

function deleteSnake(snake) {
    log("deleteSnake   Removing snake's body cells: " + snake.body.length);
    for (var point of snake.body) {
        //log("clear   x="+point.x+"   y="+point.y)
        setFieldData(point, 'empty', null, null);
    }
    for (var i = 0; i < gameobjs.length; i++) {
        if (gameobjs[i] == snake) {
            gameobjs.splice(i, 1);
            break;
        }
    }
}

function cmdEq(c1, c2) {
    return (c1 == c2) || (c1.payload == c2.payload) || (c1 == c2.payload) || (c1.payload == c2);
}

function getPerpendicular(direction) {
    var dx = [cDir.left, cDir.right];
    var dy = [cDir.up, cDir.down];
    return dx.includes(direction) ? dy : dx;
}

function getOpposite(dir) {
    return (dir == cDir.left ? cDir.right : (dir == cDir.up ? cDir.down : (dir == cDir.right ? cDir.left : cDir.up)));
}

function isValidCommand(cmd) {
    return cmd && cDirRev.hasOwnProperty(cmd.payload);
}

function Command(dir, ts) {
    this.payload = dir || cDir.up;
    this.timestamp = ts || 0;
}

//-----------------------------------------------
function Cursor(buffer, curDir) {
    var buffer = buffer || defaultCursorBuffer;
    var control = [new Command(curDir)];

    var cmdByTimestamps = function (a, b) {
        return a.timestamp - b.timestamp;
    };

    var okToRun = function (cmd) {
        return !cmdEq(control[0], cmd) && !cmdEq(control[0], getOpposite(cmd.payload));
    };

    var toPlain = function (e) {
        return cDirRev[e.payload].charAt(0)
    };

    return {
        hasNext: function () {
            return control.length > 1;
        },
        get: function () {
            if (control.length == 1) return control[0].payload;

            log(control.map(toPlain));
            var val = control[1];
            if (okToRun(val)) {
                control.shift();
                return val.payload;
            }
            control.splice(1, 1);
            return this.get();
        },
        set: function (cmd) {
            log(cmd);
            if (isValidCommand(cmd)) {
                control.push(cmd);
                control.sort(cmdByTimestamps);
                log(control.map(toPlain));
                if (control.length > buffer) {
                    var lostCommand = control.shift();
                    log(cDirRev[lostCommand.payload] + " dropped from queue: exceed buffer size of " + buffer);
                    log(control.map(toPlain));
                }
            } else {
                log(cmd.payload + " not placed to queue");
            }
        },
        show: function () {
            return control;
        }
    }
}


//-----------------------------------------------
function newPlayer(userId, color, socket) {
    log("newPlayer");

    var player = new Object();
    try {
        player.snake = newSnake(player, "red");
        player.id = getNextObjId();
        player.color = color;
        player.name = userId;
        player.socket = socket;
        player.score = 0;
        player.controlStackCursor = new Cursor(controlBuffer, player.snake.direction);

        players.push(player);
        log("new player created");

    }
    catch (err) {
        log("ERR: New player creation failed");
        throw err;
    }
    return (player);
}

function deletePlayer(player) {
    if (typeof(player) === 'undefined')
        return;
    log("deletePlayer  player.id=" + player.id + "  socket.id=" + player.socket.id);
    var istopscore = checkTopScore(player);
    //log(player);
    for (var p of players) {
        if (p == player) {
            log("player found");
            try {
                var msg = new Object();
                msg.score = player.score;
                msg.istopscore = istopscore;
                msg.topscores = topScores;
                io.sockets.connected[player.socket.id].emit("gameover", msg);
            }
            catch (err) {
                log("WARN: user already disconnected");
                log("WARN: " + err);
            }
            deleteSnake(p.snake);
            players.splice(players.indexOf(player), 1);
            //delete players[i];
            updateGameStats();
            break;
        }
    }
}

function changeScore(player, scoreDelta) {
    player.score += scoreDelta;
    notifyPlayerStatsChanged(player);
    updateGameStats();
}


function notifyPlayerStatsChanged(player) {
    var stats = new Object();
    stats.score = player.score;
    player.socket.emit('playerStats', stats);
}


function processPlayerMoveStack(player) {
    var cursor = player.controlStackCursor;
    if (!cursor.hasNext()) return;
    player.snake.direction = cursor.get();
}

function addPlayerControlStack(player, action) {
    player.controlStackCursor.set(action);
}


// function Action(type, value) {
//     this.type = type || "dir";
//     this.value = value || 0;
// }


//-----------------------------------------------
function getClearField() {
    var clearField = new Array(fieldHeight * fieldWidth);
    var emptyFieldData = new Object();
    emptyFieldData.id = 'empty';
    emptyFieldData.color = null;
    clearField.fill(emptyFieldData);
    log("field created");
    return clearField;
}


function copySnakeToField(field, gameObjId) {
    for (var i = 0; i < gameObjId[gameObjId].body.length; i++) {
        field[gameObjId[gameObjId].body[i].x, gameObjId[gameObjId].body[i].y] = gameObjId;
    }
}


function SnakePoint(point, direction) {
    this.point = point;
    this.direction = direction;
}


function getRandomCellForSnake(safetyZoneLength, retriesLimit) {
    var point;
    var direction;
    var fieldWidthCenter = (fieldWidth - spawnMargin * 2) / 2;
    var retries = 0;
    var checkResult;
    do {
        point = getRandomPoint(spawnMargin);

        direction = cDir.right;
        if (point.x < fieldWidthCenter / 2) {
            direction = cDir.up;
        }
        if (point.x > fieldWidthCenter / 2 + fieldWidthCenter) {
            direction = cDir.left;
        }
        var fieldHeightCenter = (fieldHeight - spawnMargin * 2) / 2;
        if (point.y < fieldHeightCenter / 2) {
            direction = cDir.down;
        }
        if (point.y > fieldHeightCenter + fieldHeightCenter / 2) {
            direction = cDir.right;
        }
        checkResult = checkNextPoints(point, direction, safetyZoneLength);
    } while (!checkResult && ++retries < retriesLimit);

    if (!checkResult) {
        throw "No space for new snake";
    }

    var snakePoint = new SnakePoint(point, direction);
    return snakePoint;
}


function getRandomPoint(margin) {
    margin = margin || spawnMargin;
    return new Point(
        Math.round(margin + (fieldWidth - margin * 2) * Math.random()),
        Math.round(margin + (fieldHeight - margin * 2) * Math.random())
    );
}
function randomAvailablePoint(direction, count, margin) {
    //log("randomAvailablePoint");
    var point = getRandomPoint(spawnMargin);
    var retryCount = 0;


    while (!checkNextPoints(point, direction, count) && ++retryCount < retryLimit) {
        point = getRandomPoint(spawnMargin);
    }
    if (retryCount >= retryLimit) {
        log('unable to find free space');
        return (new Point(0, 0));
    }
    //log("randomAvailablePoint completed");
    return (point);
}


function checkNextPoints(point, direction, count) {
    var curPoint = point;
    for (var i = 0; i <= count; i++) {
        if (fieldData(curPoint.x, curPoint.y) != 'empty') {
            //log("free space check failed. Found: "+fieldData(curPoint.x,curPoint.y));
            return (false);
        }
        else {
            //log("free space check passed. Found: " + fieldData(curPoint.x, curPoint.y));
        }
        curPoint = adjustPoint(point, direction);
    }
    return (true);
}


//-----------------------------------------------
io.sockets.on('connection', function (socket) {
    log('connection');

    socket.on('client_init', function (data) {
        log("client_init.  data: " + data);
        log("playerid:" + data.id);
        try {
            var player = newPlayer(data.id, data.color, socket);
            log('playerId: ' + data.id + '  socketId: ' + socket.id);
            //servio.sockets.socket(id).emit('hello');
            var msg = new Object();
            msg.userId = data.id;
            msg.socketId = socket.id;
            msg.gameWidth = fieldWidth;
            msg.gameHeight = fieldHeight;
            msg.snakeId = player.snake.id;
            socket.emit('playerid', msg);
            updateGameStats();
            sendField(socket);
        }
        catch (err) {
            log("ERR: Unable to create player");
            var msg = new Object();
            msg.err = "Unable to create player <- " + err;
            socket.emit('connecterr', msg);
        }
    });

    socket.on('disconnect', function () {
        log("disconnect");
        var len = 0;
        deletePlayer(getPlayerBySocket(socket));
    });

    socket.on('usrCtrl', function (data) {
        p = getPlayerBySocket(socket);
        if (typeof(p) !== 'undefined' && p !== null) {
            addPlayerControlStack(p, data);
        }
        else {
            log("ERR: Player not found")
        }
    });

    /*
     socket.on('pauseGame', function () {
     log("pauseGame");
     gamePaused = !gamePaused;
     });

     socket.on('freezeSnake', function () {
     log("freezeSnake");
     p = getPlayerBySocket(socket);
     if (p.snake.status == 'frozen') {
     p.snake.status = 'alive';
     }
     else {
     p.snake.status = 'frozen';
     }
     });
     */


});


//-----------------------------------------------
function sendField(socket) {
    socket.emit('gamefield', field);
}


function detectOutOfBoundaries(curPoint) {
    return curPoint.x < 0 || curPoint.x >= fieldWidth
        || curPoint.y < 0 || curPoint.y >= fieldHeight;
}

function snakeUpdate(snake) {
    //log("snakeUpdate #"+snake.id);
    if (snake.status == 'frozen' || snake.status == 'dead')
        return;

    var newHeadPoint = adjustPoint(snake.body[0], snake.direction);
    //log("oldX="+snake.body[0].x+"  oldY="+snake.body[0].y+")   (newX="+newHeadPoint.x+"  newY="+newHeadPoint.y+")");

    if (detectOutOfBoundaries(newHeadPoint)) {
        // snake is dead
        snake.status = 'dead';
        log("Snake tried to escape and shot down");
    }
    else {
        // check for barriers/objects and interact with them
        //log(fieldData(newHeadPoint.x,newHeadPoint.y));
        if (fieldData(newHeadPoint.x, newHeadPoint.y) != 'empty') {
            //log(fieldData(newHeadPoint.x,newHeadPoint.y));
            var gameObject = getGameObjectById(fieldData(newHeadPoint.x, newHeadPoint.y));
            if (typeof(gameObject) !== 'undefined') {
                switch (gameObject.type) {
                    case 'bonus':
                        // snake should eat the bonus
                        log("snake #" + snake.id + " eats bonus  grow:" + gameObject.grow + "   score:" + gameObject.score);
                        deleteBonus(gameObject.id);
                        changeScore(snake.player, gameObject.score * players.length);
                        snake.grow = snake.grow + gameObject.grow;
                        break;
                    case 'snake':
                        if (gameObject.body[0].x == newHeadPoint.x && gameObject.body[0].y == newHeadPoint.y) {
                            gameObject.status = 'dead';
                        }
                    default:
                        snake.status = 'dead';
                        log("Snake found something and die. It found: " + gameObject.type);
                        break;
                }
            }
            else {
                log("ERR: snake found undefined object");
            }
        }
        if (snake.status !== 'dead') {
            // snake is alive and moving
            if (snake.grow == 0) {
                var tailPoint = snake.body.pop();
                setFieldData(tailPoint, 'empty');
            }
            else {
                //log("Snake is growing  grow="+snake.grow);
                snake.grow--;
            }
            snake.body.unshift(newHeadPoint);
            setFieldData(newHeadPoint, snake.id, snake.type, snake.player.color);
        }
    }

}


function getGameObjectById(id) {
    var index = gameobjs.map(function (el) {
        return el.id;
    }).indexOf(id);
    return gameobjs[index];
}

function setFieldData(point, id, type, color) {
    var command = new Object();
    command.point = point;
    command.id = id;
    command.type = type;
    command.color = color;
    commandsStack.push(command);

    var cellVal = new CellValue(id, type, color);
    field[point.x + point.y * fieldWidth] = cellVal;
}


function processCommandStack() {
    //log("processing commandsStack with "+commandsStack.length+" commands");
    for (var i = 0; i < commandsStack.length; i++) {
        //log(commandsStack[i]);
        //var cellVal=new CellValue(commandsStack[i].id, commandsStack[i].color);
        var cellVal = new Object();
        cellVal.id = commandsStack[i].id;
        cellVal.type = commandsStack[i].type;
        cellVal.color = commandsStack[i].color;
        //log(cellVal);
        field[commandsStack[i].point.x + commandsStack[i].point.y * fieldWidth] = cellVal;
    }
}


function getPlayerBySocket(socket) {
    for (var p in players) {
        if (players[p].socket.id == socket.id) {
            return players[p];
        }
    }
    log("ERR: getPlayerBySocket can not find player");
    //log(socket);
}


function getObjIndexById(id) {
    var index = gameobjs.map(function (el) {
        return el.id;
    }).indexOf(id);
    return index;
}


function fieldData(x, y) {
    if (field[x + y * fieldWidth].id == 'empty') {
        return 'empty';
    }
    else {
        return (field[x + y * fieldWidth].id);
    }
}

function updateGameStats() {
    var stats = new Object();
    try {
        stats.usersCount = players.length;

        playerDataArr = [];

        for (player in players) {
            playerData = new Object();
            playerData.name = players[player].name;
            playerData.color = players[player].color;
            playerData.score = players[player].score;
            playerDataArr.push(playerData);
        }
        stats.players = playerDataArr;
        io.sockets.emit('gameStats', stats);
    }
    catch (err) {
        log("updateGameStats failed. socket.id=" + socket.id);
    }

}


function updateGameData() {

    if (tickNumber % 10 == 0) {
        //log("tick#" + tickNumber+ "  gameobjs.length="+gameobjs.length+"  players.length="+players.length);
    }
    if (gamePaused)
        return;

    // process players control stacks
    for (playerIdx in players) {
        processPlayerMoveStack(players[playerIdx]);
    }


    // update game data
    for (var i = 0; i < gameobjs.length; i++) {
        if (typeof(gameobjs[i]) !== 'undefined') {
            if (typeof(gameobjs[i].update) != "undefined") {
                gameobjs[i].update(gameobjs[i]);
            }
        }
    }

    //generate new bonus
    if (bonusCount <= bonusLimit && Math.random() * bonusDelay <= 1) {
        newBonus();
    }

    // process commands in stack
    //processCommandStack();
    // process dead snake removal actions
    processCommandStack();

    //FIXME: SHOULD WE DO THIS TWICE?
    // notify clients
    // var gameData = new Object();
    // gameData.commandsStack = commandsStack;
    // gameData.gameTick=tickNumber;
    // io.sockets.emit('gameData', gameData);

    //log("Send commandsStack.length="+commandsStack.length);


    for (var gameObject of gameobjs) {
        if (typeof(gameObject) !== 'undefined') {
            if (gameObject.type == 'snake') {
                if (gameObject.status == 'dead')
                    deletePlayer(gameObject.player);
            }
        }
    }

    // notify clients
    var gameData = new Object();
    gameData.commandsStack = commandsStack;
    gameData.gameTick = tickNumber;
    io.sockets.emit('gameData', gameData);


    // clear the stack
    commandsStack = [];

    tickNumber++;
}

function topScore(name, score, date) {
    this.name = name;
    this.score = score;
    this.date = date;
}


function checkTopScore(player) {
    if (typeof(player) === 'undefined' || player == null) {
        return (false);
    }
    log("checkTopScore");
    var newRecord = false;
    var topIdx = 0;
    if (player.score == 0 || player.score < topScores[topScores.length - 1]) {
        return false;
    }

    if (topScores.length < topCoresLimit) {
        newRecord = true;
    }
    else {
        for (topIdx in topScores) {
            if (topScores[topIdx].score < player.score) {
                newRecord = true;
                break;
            }
        }
    }
    if (newRecord) {
        log("Adding topscore record: idx=" + topIdx + " with score=" + player.score);
        topScores.splice(topIdx, 0, new topScore(player.name, player.score, new Date()));
        if (topScores.length > topCoresLimit) {
            topScores.splice(topCoresLimit);
        }
        topScores.sort(function (a, b) {
            return (b.score - a.score);
        });
        writeTopScore();
        return (true);
    }
    return (false);
}


function writeTopScore() {
    fs.writeFile(__dirname + '/data/snakes.score', JSON.stringify(topScores));
    log("writeTopScore done");
}


setInterval(updateGameData, gameUpdateDelay);

