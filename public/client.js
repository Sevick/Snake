var socket;
var userName = "";
var gameWidth = 0;
var gameHeight = 0;
var canvas;
var ctx;
var cellSize = 10;
var gameFieldColor = "#00005f";
var gridColor="rgba(100,100,128,0.5)";
var snakeId;
var field;

function sendUserControl(msg) {
    socket.emit('usrCtrl', msg);
}

function sendFreezeSnake() {
    socket.emit('freezeSnake');
}

function sendPauseGame() {
    socket.emit('pauseGame');
}

$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 40:
            sendUserControl(2);
            break;
        case 39:
            sendUserControl(1);
            break;
        case 38:
            sendUserControl(0);
            break;
        case 37:
            sendUserControl(3);
            break;
        case 80 : //p
            sendFreezeSnake();
            break;
        case 79 : //o
            sendPauseGame();
            break;
    }
});


$('form').submit(function () {
    socket = io();
    setupSocket(socket);

    console.log("form submit");
    var msg = new Object();
    msg.id = $('#username').val();
    socket.emit('client_init', msg);
    return false;
});


function drawEmptyGameField() {
    console.log("drawEmptyGameField");
    if (typeof(canvas)=='undefined')
        canvas = document.getElementById("gameCanvas");
    var cellH=Math.floor((window.innerHeight-2)/(gameHeight));
    var cellW=Math.floor((window.innerWidth-2)/(gameWidth));
    cellSize= cellH<cellW ? cellH : cellW;
    canvas.width = gameWidth*cellSize;
    canvas.height = gameHeight*cellSize;
    canvas.style.margin="auto";

    if (typeof(ctx)=='undefined')
        ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = "1";
    for (var i = 1; i < gameHeight; i++) {
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(gameWidth * cellSize, i * cellSize);
    }
    for (var i = 1; i < gameWidth; i++) {
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, gameHeight * cellSize);
    }
    ctx.stroke();
}

function drawData(x, y, id, type, color) {
    if (typeof(canvas)=='undefined')
        canvas = document.getElementById("gameCanvas");
    if (typeof(ctx)=='undefined')
        ctx = canvas.getContext('2d');

    if (id == 'empty') {
        //console.log("clearing x="+x+" y="+y);
        ctx.beginPath();
        ctx.fillStyle = gameFieldColor;
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = "1";
        ctx.rect(cellSize * x+2, cellSize * y+2, cellSize-2, cellSize-2);
        ctx.fill();
    }
    else {
        if (id == snakeId) {
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = "1";
            ctx.rect(cellSize * x+2, cellSize * y+2, cellSize-2, cellSize-2);
            ctx.fill();

        }
        else {
            ctx.beginPath();
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = "1";

            if (type=='snake') {
                ctx.fillStyle = "orange";
            }
            else {
                ctx.fillStyle = color;
            }

            if (type=='bonus'){
                ctx.arc(cellSize*x+cellSize/2, cellSize * y+cellSize/2, cellSize/2-2, 0, 2*Math.PI);
            }
            else {
                ctx.rect(cellSize*x+2, cellSize * y+2, cellSize-2, cellSize-2);
            }
            ctx.fill();
        }
    }
}

function drawGameField() {
    for (var i = 0; i < gameHeight; i++) {
        for (var j = 0; j < gameWidth; j++) {
            drawData(j, i, field[j + i * gameWidth].id, field[j + i * gameWidth].type, field[j + i * gameWidth].color);
        }
    }
}


function setupSocket(socket) {
    socket.on('correct', function (msg) {
        console.log('correct: ' + msg);
    });
    socket.on('playerid', function (msg) {
        console.log('playerid:' + msg.userId + "  gameWidth=" + msg.gameWidth + "  gameHeight=" + msg.gameHeight);
        userName = msg.userId;
        gameWidth = msg.gameWidth;
        gameHeight = msg.gameHeight;
        snakeId = msg.snakeId;
        document.getElementById("game").style.display = "block";
        document.getElementById("login").style.display = "none";
        //document.getElementById("playerIdContainer").innerHTML = '<p>UserId: ' + msg.userId + '<br>SocketId: ' + msg.socketId + '</p>';
        document.getElementById("playerIdContainer").innerHTML = '<p>UserId: ' + msg.userId +'</p>';
        drawEmptyGameField();
    });

    socket.on('gameover', function (msg) {
        console.log("gameover:  msg.score=" + msg.score);
        socket.disconnect();
        alert("\nGame over.\n\nYour score: " + msg.score + "\n\n");
        document.getElementById("game").style.display = "none";
        document.getElementById("login").style.display = "flex";
        document.getElementById("username").focus();
    });

    socket.on('connecterr', function (msg) {
        console.log('connecterr:' + msg.err);
        alert("Connection error: " + msg.err);
        document.getElementById("game").style.display = "none";
        document.getElementById("login").style.display = "flex";
    });

    socket.on('gameStats', function (stats) {
        console.log('usersCount:' + stats.usersCount);
        document.getElementById("usersCount").innerText = stats.usersCount;
    });

    socket.on('gamefield', function (gamefield) {
        console.log('gamefield received');
        field = gamefield;
        drawGameField();
    });

    socket.on('gameData', function (gameData) {
        //console.log("Received data:");
        //console.log(gameData);
        canvas = document.getElementById("gameCanvas");
        var ctx = canvas.getContext('2d');
        var commandsStack = gameData.commandsStack;
        //console.log("Commands stack length:"+commandsStack.length);
        for (var i = 0; i < commandsStack.length; i++) {
            //console.log(commandsStack[i]);
            drawData(commandsStack[i].point.x, commandsStack[i].point.y, commandsStack[i].id, commandsStack[i].type , commandsStack[i].color);
        }
        //console.log("gameData done");
    });
}

