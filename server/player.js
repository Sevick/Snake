/**
 * Created by S on 09.11.2016.
 */

module.exports = {
    newPlayer: newPlayer,
    deletePlayer: deletePlayer,
    changeScore: changeScore,
    getPlayerCount: getPlayerCount,
    getPlayerBySocket: getPlayerBySocket,
    processPlayersMoveStack: processPlayersMoveStack,
    updateGameStats: updateGameStats,
    addActionToControlStack: addActionToControlStack
}

var snakelib = require(__dirname+'/snakelib');
var gamefield = require(__dirname+'/gamefield');
var gameobjects = require(__dirname+'/gameobjects');
var topscorelib = require(__dirname+'/topscore');
var directionslib = require(__dirname+'/directions');

const defaultCursorBuffer = 5;
const controlBuffer = 7;
var players = [];

function newPlayer(userId, color, socket) {
    logger.log("newPlayer");

    var player = new Object();
    try {
        player.snake = snakelib.newSnake(player, "red");
        player.id = gameobjects.getNextObjId();
        player.color = color;
        player.name = userId;
        player.socket = socket;
        player.score = 0;
        player.controlStackCursor = new Cursor(controlBuffer, player.snake.direction);

        players.push(player);
        logger.log("new player created");

    }
    catch (err) {
        logger.log("ERR: New player creation failed");
        throw err;
    }
    return (player);
}

function deletePlayer(player) {
    if (typeof(player) === 'undefined')
        return;
    logger.log("deletePlayer  player.id=" + player.id + "  socket.id=" + player.socket.id);
    var istopscore = topscorelib.checkTopScore(player);
    //logger.log(player);
    for (var p of players) {
        if (p == player) {
            logger.log("player found");
            try {
                var msg = new Object();
                msg.score = player.score;
                msg.istopscore = istopscore;
                msg.topscores = topscorelib.getTopScores();
                io.sockets.connected[player.socket.id].emit("gameover", msg);
            }
            catch (err) {
                logger.log("WARN: user already disconnected");
                logger.log("WARN: " + err);
            }
            snakelib.deleteSnake(p.snake);
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

function getPlayerCount(){
    return players.length;
}

function getPlayerBySocket(socket) {
    for (var p in players) {
        if (players[p].socket.id == socket.id) {
            return players[p];
        }
    }
    logger.log("ERR: getPlayerBySocket can not find player");
    //logger.log(socket);
}


function processPlayersMoveStack() {
    for (playerIdx in players) {
        var cursor = players[playerIdx].controlStackCursor;
        if (!cursor.hasNext()) return;
        players[playerIdx].snake.direction = cursor.get();
    }
}

//-----------------------------------------------

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
        return !cmdEq(control[0], cmd) && !cmdEq(control[0], directionslib.getOpposite(cmd.payload));
    };

    var toPlain = function (e) {
        return (directionslib.getReverseDirs())[e.payload].charAt(0)
    };

    return {
        hasNext: function () {
            return control.length > 1;
        },
        get: function () {
            if (control.length == 1) return control[0].payload;

            logger.log(control.map(toPlain));
            var val = control[1];
            if (okToRun(val)) {
                control.shift();
                return val.payload;
            }
            control.splice(1, 1);
            return this.get();
        },
        set: function (cmd) {
            logger.log(cmd);
            if (isValidCommand(cmd)) {
                control.push(cmd);
                control.sort(cmdByTimestamps);
                logger.log(control.map(toPlain));
                if (control.length > buffer) {
                    var lostCommand = control.shift();
                    logger.log(cDirRev[lostCommand.payload] + " dropped from queue: exceed buffer size of " + buffer);
                    logger.log(control.map(toPlain));
                }
            } else {
                logger.log(cmd.payload + " not placed to queue");
            }
        },
        show: function () {
            return control;
        }
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
        logger.log("updateGameStats failed. socket.id=" + socket.id);
    }
}


//-----------------------------------------------
function notifyPlayerStatsChanged(player) {
    var stats = new Object();
    stats.score = player.score;
    player.socket.emit('playerStats', stats);
}


function addActionToControlStack(player,data){
    player.controlStackCursor.set(data);
}

//-----------------------------------------------
function isValidCommand(cmd) {
    return cmd && directionslib.getReverseDirs().hasOwnProperty(cmd.payload);
}


function cmdEq(c1, c2) {
    return (c1 == c2) || (c1.payload == c2.payload) || (c1 == c2.payload) || (c1.payload == c2);
}