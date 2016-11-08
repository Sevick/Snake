var socket;
var userName = "";
var gameWidth = 0;
var gameHeight = 0;
var canvas;
var ctx;
var cellSize = 10;
var gameFieldColor = "#00005f";
var gridColor = "rgba(100,100,128,0.5)";
var snakeId;
var field;
var playerColor;
var enemyColors = true;
var lastTiltLR = parseFloat(0);
var lastTiltUD = parseFloat(0);
var startTiltLR;
var startTiltUD;

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

function Command(dir, ts) {
    this.payload = dir || cDir.up;
    this.timestamp = ts || performance.now();
}

function sendUserControl(msg) {
    socket.emit('usrCtrl', new Command(msg));
}

function sendFreezeSnake() {
    socket.emit('freezeSnake');
}

function sendPauseGame() {
    socket.emit('pauseGame');
}


$(document).ready(function () {
    var colors = jsColorPicker('.color', {
        customBG: '#222',
        readOnly: true,
        size: 0,
        // patch: false,
        init: function (elm, colors) { // colors is a different instance (not connected to colorPicker)
            elm.style.backgroundColor = elm.value;
            elm.style.color = colors.rgbaMixCustom.luminance > 0.22 ? '#222' : '#ddd';
        }
    });

    init();
});

function init() {

    // setup accelerometer controls
    if (window.DeviceOrientationEvent) {
        document.getElementById("debug").innerHTML = "DeviceOrientation";
        // Listen for the deviceorientation event and handle the raw data
        window.addEventListener('deviceorientation', gyroControls, false);
    }
    else {
        console.log("DeviceOrientationEvent is not supported");
    }

    // read cookies
    //console.log("Document cookie: "+document.cookie);
    var userName = getCookie("username");
    var userColor = getCookie("usercolor");
    if (username != '') {
        document.getElementById('username').value = userName;
    }
    if (userColor != '') {
        document.getElementById('usercolor').value = userColor;
        document.getElementById('usercolor').style.backgroundColor = userColor;
    }
}


$("#game").keydown(function (e) {
    switch (e.keyCode) {
        case 67:    // c
            enemyColors = !enemyColors;
            break;
        case 83:
        case 40:
            sendUserControl(cDir.down); //down
            break;
        case 68:
        case 39:
            sendUserControl(cDir.right); // right
            break;
        case 87:
        case 38:
            sendUserControl(cDir.up); // up
            break;
        case 65:
        case 37:
            sendUserControl(cDir.left); // left
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
    playerColor = $('#usercolor').val();
    msg.color = playerColor;

    setCookie("username", msg.id, 365);
    setCookie("usercolor", playerColor, 365);

    socket.emit('client_init', msg);
    return false;
});


function onclickCloseTopScore() {
    console.log("onclickCloseTopScore");
    closeTopScore();
}


function closeTopScore() {
    document.getElementById("gameover").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("username").focus();
    document.getElementById("playerIdContainer").style.display = "none";
}


function showGame() {
    document.getElementById("game").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("playerIdContainer").style.display = "block";
    document.getElementById("game").focus();
    drawEmptyGameField();
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
        showGame();
        //document.getElementById("playerIdContainer").innerHTML = '<p>UserId: ' + msg.userId + '<br>SocketId: ' + msg.socketId + '</p>';
        document.getElementById("playerId").innerHTML = '<p>' + msg.userId + '</p>';
    });

    socket.on('observer', function (msg) {
        console.log('connected as observer');
        gameWidth = msg.gameWidth;
        gameHeight = msg.gameHeight;
        showGame();
    });    

    socket.on('gameover', function (msg) {
        console.log("gameover:  msg.score=" + msg.score);
        //socket.disconnect();

        var topScores = msg.topscores;
        //console.log("Top score:");
        //console.log(topScores);
        var topScoreTable = document.getElementById("topScoresTable");
        topScoreTable.innerHTML = "";
        for (var topRecord in topScores) {
            var newRow = topScoreTable.insertRow();
            var newCell = newRow.insertCell();
            newCell.className = "topScoreNameCell";
            newCell.innerText = (topScores[topRecord]).name;
            newCell = newRow.insertCell();
            newCell.className = "topScoreScoreCell";
            newCell.innerText = (topScores[topRecord]).score;
            newCell = newRow.insertCell();
            newCell.className = "topScoreDateCell";
            newCell.innerText = dateToStr((topScores[topRecord]).date);
            newCell.style.whiteSpace = "nowrap";
        }
        document.getElementById("gameover").style.display = 'flex';

        var gameoverDiv = document.getElementById("gameover");
        gameoverDiv.focus();
        gameoverDiv.addEventListener("keyup", function (KeyboardEvent) {
                if (KeyboardEvent.key == 'Enter') {  // the enter key code
                    $('#closeTopScore').click();
                    return false;
                }
            }
        );
    });

    socket.on('connecterr', function (msg) {
        console.log('connecterr:' + msg.err);
        alert("Connection error: " + msg.err);
        document.getElementById("game").style.display = "none";
        document.getElementById("login").style.display = "flex";
    });

    socket.on('gameStats', function (stats) {
        document.getElementById("usersCount").innerText = stats.usersCount;
        var playersTbl = document.getElementById("playersTab");
        playersTbl.innerHTML = "";
        for (var player in stats.players) {
            var newRow = playersTbl.insertRow();
            var newCell = newRow.insertCell();
            newCell.className = "playersTableColorCol";
            //newCell.innerHTML="<div width='"+cellSize+"' height='"+cellSize+"' background-color='"+stats.players[player].color+"'></div>";
            newCell.style.backgroundColor = stats.players[player].color;
            newCell = newRow.insertCell();
            newCell.className = "playersTableNameCol";
            newCell.innerText = stats.players[player].name;
            newCell = newRow.insertCell();
            newCell.className = "playersTableScoreCol";
            newCell.innerText = stats.players[player].score;
        }
    });

    socket.on('playerStats', function (stats) {
        //console.log('score:' + stats.score);
        document.getElementById("score").innerText = stats.score;
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
        var gameTick = gameData.gameTick;        // in-game timestamp
        //console.log("Commands stack length:"+commandsStack.length);
        for (var i = 0; i < commandsStack.length; i++) {
            //console.log(commandsStack[i]);
            drawData(commandsStack[i].point.x, commandsStack[i].point.y, commandsStack[i].id, commandsStack[i].type, commandsStack[i].color);
        }
        //console.log("gameData done");
    });
}

