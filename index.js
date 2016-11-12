var express = require('express'); // Get the module
var app = express(); //
var path = require('path');
var http = require('http').Server(app);
global.io = require('socket.io')(http);




global.logger = require(__dirname+'/server/logger');
global.configpath = __dirname+'/config/';
global.topscorepath = __dirname+'/data/';

var config = require(__dirname+'/server/config');
var gamefield = require(__dirname+'/server/gamefield');
var playerlib = require(__dirname+'/server/player');
var snakelib = require(__dirname+'/server/snakelib');
var bonus = require(__dirname+'/server/bonus');
var topscores = require(__dirname+'/server/topscore');
var logger = require(__dirname+'/server/logger');
var gameobjects = require(__dirname+'/server/gameobjects');








const gameUpdateDelay = 120;  // size of game tick in millis




var gamePaused = false;
var tickNumber = 0;


function init() {
    config.init();
    topscores.init();

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'jslib')));

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    app.get('/bot', function (req, res) {
        res.sendfile(__dirname + '/bot.html');
    });

    http.listen(config.getPort(), function () {
        logger.log('listening on *:' + config.getPort());
        gamefield.init();
    });

    setInterval(updateGameData, gameUpdateDelay);
}

init();



//-----------------------------------------------
io.sockets.on('connection', function (socket) {
    logger.log('connection');

    socket.on('client_init', function (data) {
        logger.log("client_init.  data: " + data);
        logger.log("playerid:" + data.id);
        try {
            if (data.id!=='Observer') {
                var newPlayer = playerlib.newPlayer(data.id, data.color, socket);
                logger.log('playerId: ' + data.id + '  socketId: ' + socket.id);
                //servio.sockets.socket(id).emit('hello');
                var msg = new Object();
                msg.userId = data.id;
                msg.socketId = socket.id;
                msg.gameWidth = gamefield.getFieldWidth();
                msg.gameHeight = gamefield.getFieldHeight();
                //msg.snakeId = newPlayer.snake.id;
                socket.emit('playerid', msg);
            }
            else{
                var msg=new Object();
                msg.gameWidth = fieldWidth;
                msg.gameHeight = fieldHeight;
                socket.emit('observer', msg);
            }
            logger.log("sending gamefield");
            sendField(socket);
            logger.log("updating gameStats");
            playerlib.updateGameStats();
        }
        catch (err) {
            logger.log("ERR: Unable to create player");
            var msg = new Object();
            msg.err = "Unable to create player <- " + err;
            socket.emit('connecterr', msg);
        }
    });

    socket.on('disconnect', function () {
        logger.log("disconnect");
        var len = 0;
        playerlib.deletePlayer(playerlib.getPlayerBySocket(socket));
    });

    socket.on('usrCtrl', function (data) {
        p = playerlib.getPlayerBySocket(socket);
        if (typeof(p) !== 'undefined' && p !== null) {
            playerlib.addActionToControlStack(p,data);
        }
        else {
            logger.log("ERR: Player not found")
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
    socket.emit('gamefield', gamefield.getField());
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





function getObjIndexById(id) {
    var index = gameobjs.map(function (el) {
        return el.id;
    }).indexOf(id);
    return index;
}


function copySnakeToField(field, gameObjId) {
    for (var i = 0; i < gameObjId[gameObjId].body.length; i++) {
        field[gameObjId[gameObjId].body[i].x, gameObjId[gameObjId].body[i].y] = gameObjId;
    }
}




function updateGameData() {

    if (tickNumber % 10 == 0) {
        //log("tick#" + tickNumber+ "  gameobjs.length="+gameobjs.length+"  players.length="+players.length);
    }
    if (gamePaused)
        return;

    // process players control stacks
    playerlib.processPlayersMoveStack();

    gameobjects.update();        // update game data
    
    var newBonus=bonus.newBonus();  //generate new bonuses

    // process commands in stack
    //processCommandStack();

    //FIXME: SHOULD WE DO THIS TWICE?
    // notify clients
    // var gameData = new Object();
    // gameData.commandsStack = commandsStack;
    // gameData.gameTick=tickNumber;
    // io.sockets.emit('gameData', gameData);

    //log("Send commandsStack.length="+commandsStack.length);


    for (var gameObject of gameobjects.getGameObjsArray()) {
        if (typeof(gameObject) !== 'undefined') {
            if (gameObject.type == 'snake') {
                if (gameObject.status == 'dead')
                    playerlib.deletePlayer(gameObject.player);
            }
        }
    }

    // notify clients
    var gameData = new Object();
    gameData.commandsStack = gamefield.getCommandsStack();
    gameData.gameTick = tickNumber;
    io.sockets.emit('gameData', gameData);


    // clear the stack
    gamefield.clearCommandsStack();
    commandsStack = [];

    tickNumber++;
}


