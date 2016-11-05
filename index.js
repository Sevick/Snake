var express = require('express'); // Get the module
var cookieParser = require('cookie-parser');
var app = express(); //
app.use(cookieParser());
var path = require('path');

//var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');


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
var gameUpdateDelay = 100;
var lastGameObjId = 100;
var bonusLimit = 25;
var bonusCount = 0;
var bonusDelay = 5; // in game ticks
var bonusesTypes = [{color: "green", grow: 1, score: 5, type: 'bonus'},
    {color: "yellow", grow: 3, score: 10, type: 'bonus'},
    {color: "white", grow: 5, score: 15, type: 'bonus'}];

var gamePaused = false;
var tickNumber = 0;
var lastScoreWrite = 1;

var config = {port: 3000};

var DIRECTION_UP = 0;
var DIRECTION_LEFT = 3;
var DIRECTION_RIGHT = 1;
var DIRECTION_DOWN = 2;
var WRITE_TOP_SCORE_TIMELIMIT = 1000;

//var SECRETKEY = 'Hhyu768mnb3909jVBjjk0kjj5Yj22kKM';



function init() {

    console.log("Reading config");
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


    console.log("Loading top scores");
    try {
        var topScoreFile = fs.readFileSync(__dirname + '/data/snakes.score', 'utf8', 'r');
        if (typeof(configFile) !== 'undefined' || configFile != null) {
            //console.log(topScoreFile);
            topScores = JSON.parse(topScoreFile);
            topScores.sort(function (a, b) {
                return (b.score - a.score);
            });
            //console.log(topScores);
        }
    }
    catch (err) {
        console.log("Error reading /data/snakes.score");
    }

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'jslib')));

    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/index.html');
    });

    http.listen(config.port, function () {
        console.log('listening on *:3000');
        field = getClearField();
    });
}


function writeConfig() {
    console.log("writeConfig");
    console.log(config);
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

function movePoint(point, direction) {
    var deltas = getDeltas(direction);
    var newPoint = new Object();
    newPoint.x = point.x + deltas.deltaX;
    newPoint.y = point.y + deltas.deltaY;
    return (newPoint);
}

//----------------------------------------
function newBonus() {
    //console.log("newBonus");
    var point = randomAvailablePoint(0, 0, 0);	// get free point and check than [count] cell on the direction is free too
    if (typeof(point) === "undefined" || point === null) {
        console.log("Unable to find space for bonus");
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
    console.log("deleteBonus   id=" + id);
    bonusCount--;
    var i = getObjIndexById(id);
    gameobjs.splice(i, 1);
}


//-----------------------------------------------
function newSnake(player) {
    console.log("newSnake");
    var snake = new Object();

    snake.id = getNextObjId();
    snake.player = player;
    snake.type = 'snake';
    snake.body = [];
    snake.status = 'alive';
    snake.direction = Math.floor(Math.random() * 3);
    snake.update = snakeUpdate;
    snake.grow = 0;

    var point = randomAvailablePoint(snake.direction, 10, fieldWidth);	// get free point and check than [count] cell on the direction is free too
    console.log("got random point: x=" + point.x + "  y=" + point.y);
    if (typeof(point) === "undefined" || point === null) {
        console.log("Unable to create snake for player");
        throw "No free space to create snake. Please retry later.";
    }
    var nextPoint = movePoint(point, snake.direction);
    snake.body.push(nextPoint);
    setFieldData(nextPoint, snake.id, snake.type, player.color);
    snake.body.push(point);
    setFieldData(point, snake.id, snake.type, player.color);
    gameobjs.push(snake);

    console.log("new snake created");
    return (snake);
}

function deleteSnake(snake) {
    console.log("deleteSnake   Removing snake's body cells: " + snake.body.length);
    for (var point of snake.body) {
        //console.log("clear   x="+point.x+"   y="+point.y)
        setFieldData(point, 'empty', null, null);
    }
    for (var i = 0; i < gameobjs.length; i++) {
        if (gameobjs[i] == snake) {
            gameobjs.splice(i, 1);
            break;
        }
    }
}


//-----------------------------------------------
function newPlayer(userId, color, socket) {
    console.log("newPlayer");

    var player = new Object();
    try {
        snake = newSnake(player, "red");
        snake.player = player;
        player.id = getNextObjId();
        player.color = color;
        player.name = userId;
        player.socket = socket;
        players.push(player);
        player.snake = snake;
        player.score = 0;
        console.log("new player created");

    }
    catch (err) {
        console.log("ERR: New player creation failed");
        throw err;
    }
    return (player);
}

function deletePlayer(player) {
    if (typeof(player)==='undefined')
        return;
    console.log("deletePlayer  player.id="+player.id+"  socket.id="+player.socket.id);
    var istopscore = checkTopScore(player);
    //console.log(player);
    for (var p of players) {
        if (p == player) {
            console.log("player found");
            try {
                var msg = new Object();
                msg.score = player.score;
                msg.istopscore = istopscore;
                msg.topscores = topScores;
                io.sockets.connected[player.socket.id].emit("gameover", msg);
            }
            catch (err) {
                console.log("WARN: user already disconnected");
                console.log("WARN: " + err);
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


//-----------------------------------------------
function getClearField() {
    var clearField = new Array(fieldHeight * fieldWidth);
    var emptyFieldData = new Object();
    emptyFieldData.id = 'empty';
    emptyFieldData.color = null;
    clearField.fill(emptyFieldData);
    console.log("field created");
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


function getRandomCellForSnake() {
    var point = new Point(Math.round(spawnMargin + (fieldWidth - spawnMargin * 2) * Math.random()),
        Math.round(spawnMargin + (fieldHeight - spawnMargin * 2) * Math.random()));

    var direction = Math.round(Math.random() * 4);
    var fieldWidthCenter = (fieldWidth - spawnMargin * 2) / 2;
    if (point.x < fieldWidthCenter / 2) {
        direction = DIRECTION_RIGHT;
    }
    if (point.x > fieldWidthCenter / 2 + fieldWidthCenter) {
        direction = DIRECTION_LEFT;
    }
    var fieldHeightCenter = (fieldHeight - spawnMargin * 2) / 2;
    if (point.y < fieldHeightCenter / 2) {
        direction = DIRECTION_DOWN;
    }
    if (point.y > fieldHeightCenter + fieldHeightCenter / 2) {
        direction = DIRECTION_UP;
    }

    var snakePoint = new SnakePoint(point, direction);
    return snakePoint;
}


function randomAvailablePoint(direction, count, margin) {
    //console.log("randomAvailablePoint");
    var point = new Object();
    var deltas = getDeltas(direction)
    point.x = Math.round(spawnMargin + (fieldWidth - spawnMargin * 2) * Math.random());
    point.y = Math.round(spawnMargin + (fieldHeight - spawnMargin * 2) * Math.random());
    var retryCount = 0;

    while (!checkNextPoints(point, direction, count) && retryCount < 10) {
        point.x = Math.round(spawnMargin + (fieldWidth - spawnMargin * 2) * Math.random());
        point.y = Math.round(spawnMargin + (fieldHeight - spawnMargin * 2) * Math.random());
        retryCount++;
    }
    if (retryCount === 10) {
        console.log('unable to find free space');
        return (null);
    }
    //console.log("randomAvailablePoint completed");
    return (point);
}


function checkNextPoints(point, direction, count) {
    var deltas = getDeltas(direction);
    //var curPoint = point;
    var curPoint = new Object();
    curPoint.x = point.x;
    curPoint.y = point.y;
    for (var i = 0; i <= count; i++) {
        if (fieldData(curPoint.x, curPoint.y) != 'empty') {
            //console.log("free space check failed. Found: "+fieldData(curPoint.x,curPoint.y));
            return (false);
        }
        else {
            //console.log("free space check passed. Found: " + fieldData(curPoint.x, curPoint.y));
        }
        curPoint.x += deltas.deltaX;
        curPoint.y += deltas.deltaY;
    }
    return (true);
}


//-----------------------------------------------
io.sockets.on('connection', function (socket) {
    console.log('connection');

    socket.on('client_init', function (data) {
        console.log("client_init.  data: " + data);
        console.log("playerid:" + data.id);
        try {
            var player = newPlayer(data.id, data.color, socket);
            console.log('playerId: ' + data.id + '  socketId: ' + socket.id);
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
            console.log("ERR: Unable to create player");
            var msg = new Object();
            msg.err = "Unable to create player <- " + err;
            socket.emit('connecterr', msg);
        }
    });

    socket.on('disconnect', function () {
        console.log("disconnect");
        var len = 0;
        deletePlayer(getPlayerBySocket(socket));
    });

    socket.on('usrCtrl', function (data, id_player) {
        console.log("usrCtrl  socketId=" + socket.id);
        p = getPlayerBySocket(socket);
        if (typeof(p) !== 'undefined' && p !== null) {
            p.snake.direction = data;
        }
        else {
            console.log("ERR: Player not found")
        }
    });

    /*
     socket.on('pauseGame', function () {
     console.log("pauseGame");
     gamePaused = !gamePaused;
     });

     socket.on('freezeSnake', function () {
     console.log("freezeSnake");
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


function getDeltas(direction) {
    var deltas = new Object();
    deltas.deltaX = 0;
    deltas.deltaY = 0;
    switch (direction) {
        case DIRECTION_UP:   // north
            deltas.deltaY = -1;
            break;
        case DIRECTION_RIGHT:   // east
            deltas.deltaX = 1;
            break;
        case DIRECTION_DOWN:   // south
            deltas.deltaY = 1;
            break;
        case DIRECTION_LEFT:   // west
            deltas.deltaX = -1;
            break;
    }
    return (deltas);
}


function snakeUpdate(snake) {
    //console.log("snakeUpdate #"+snake.id);
    if (snake.status == 'frozen' || snake.status == 'dead')
        return;

    var newHeadPoint = movePoint(snake.body[0], snake.direction);
    //console.log("oldX="+snake.body[0].x+"  oldY="+snake.body[0].y+")   (newX="+newHeadPoint.x+"  newY="+newHeadPoint.y+")");

    if (newHeadPoint.x >= fieldWidth || newHeadPoint.x < 0 || newHeadPoint.y >= fieldHeight || newHeadPoint.y < 0) {
        // snake is dead
        snake.status = 'dead';
        console.log("Snake tried to escape and shot down");
    }
    else {
        // check for barriers/objects and interact with them
        //console.log(fieldData(newHeadPoint.x,newHeadPoint.y));
        if (fieldData(newHeadPoint.x, newHeadPoint.y) != 'empty') {
            //console.log(fieldData(newHeadPoint.x,newHeadPoint.y));
            var gameObject = getGameObjectById(fieldData(newHeadPoint.x, newHeadPoint.y));
            if (typeof(gameObject) !== 'undefined') {
                switch (gameObject.type) {
                    case 'bonus':
                        // snake should eat the bonus
                        console.log("snake #" + snake.id + " eats bonus  grow:" + gameObject.grow + "   score:" + gameObject.score);
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
                        console.log("Snake found something and die. It found: " + gameObject.type);
                        break;
                }
            }
            else {
                console.log("ERR: snake found undefined object");
            }
        }
        if (snake.status !== 'dead') {
            // snake is alive and moving
            if (snake.grow == 0) {
                var tailPoint = snake.body.pop();
                setFieldData(tailPoint, 'empty');
            }
            else {
                //console.log("Snake is growing  grow="+snake.grow);
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
    //console.log("processing commandsStack with "+commandsStack.length+" commands");
    for (var i = 0; i < commandsStack.length; i++) {
        //console.log(commandsStack[i]);
        //var cellVal=new CellValue(commandsStack[i].id, commandsStack[i].color);
        var cellVal = new Object();
        cellVal.id = commandsStack[i].id;
        cellVal.type = commandsStack[i].type;
        cellVal.color = commandsStack[i].color;
        //console.log(cellVal);
        field[commandsStack[i].point.x + commandsStack[i].point.y * fieldWidth] = cellVal;
    }
}


function getPlayerBySocket(socket) {
    for (var p in players) {
        if (players[p].socket.id == socket.id) {
            return players[p];
        }
    }
    console.log("ERR: getPlayerBySocket can find player");
    console.log(socket);
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
        console.log("updateGameStats failed. socket.id=" + socket.id);
    }

}


function updateGameData() {

    if (tickNumber % 10 == 0) {
        //console.log("tick#" + tickNumber+ "  gameobjs.length="+gameobjs.length+"  players.length="+players.length);
    }
    if (gamePaused)
        return;

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
    //processCommandStack();

    // notify clients
    var gameData = new Object();
    gameData.commandsStack = commandsStack;
    io.sockets.emit('gameData', gameData);
    //console.log("Send commandsStack.length="+commandsStack.length);


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
    console.log("checkTopScore");
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
        console.log("Adding topscore record: idx=" + topIdx + " with score=" + player.score);
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
        console.log("writeTopScore done");
}


setInterval(updateGameData, gameUpdateDelay);