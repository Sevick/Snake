/**
 * Created by S on 05.11.2016.
 */

function drawEmptyGameField() {
    console.log("drawEmptyGameField");
    if (typeof(canvas)=='undefined')
        canvas = document.getElementById("gameCanvas");

    w = window.innerWidth;
    h = window.innerHeight;

    var cellH=Math.floor((h-2)/(gameHeight));
    var cellW=Math.floor((w-2)/(gameWidth));
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

    //if (id == 'empty') {
        //console.log("clearing x="+x+" y="+y);
        ctx.beginPath();
        ctx.fillStyle = gameFieldColor;
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = "1";
        ctx.rect(cellSize * x+2, cellSize * y+2, cellSize-2, cellSize-2);
        ctx.fill();
    // }
    //else {
        if (id == snakeId) {
            ctx.beginPath();
            ctx.fillStyle = playerColor;
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = "1";
            ctx.rect(cellSize * x+2, cellSize * y+2, cellSize-2, cellSize-2);
            ctx.fill();

        }
        else {
            ctx.beginPath();
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = "1";

            if (!enemyColors && type=='snake'){
                ctx.fillStyle = "orange";
            }
            else{
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
    //}
}


function drawGameField() {
    for (var i = 0; i < gameHeight; i++) {
        for (var j = 0; j < gameWidth; j++) {
            drawData(j, i, field[j + i * gameWidth].id, field[j + i * gameWidth].type, field[j + i * gameWidth].color);
        }
    }
}


