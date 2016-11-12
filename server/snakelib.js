/**
 * Created by S on 09.11.2016.
 */

module.exports = {
    SnakePoint: SnakePoint,
    newSnake: newSnake,
    deleteSnake: deleteSnake
}

var gamefield = require(__dirname+'/gamefield');
var gameobjects = require(__dirname+'/gameobjects');
var directions = require(__dirname+'/directions');
var bonuslib = require(__dirname+'/bonus');
var playerlib = require(__dirname+'/player');

const retrySpawnLimit = 10;
const spawnMargin   = 10;


function SnakePoint(point, direction) {
    this.point = point;
    this.direction = direction;
}





function newSnake(player) {
    logger.log("newSnake");
    var snake = new Object();

    snake.id = gameobjects.getNextObjId();
    snake.player = player;
    snake.type = 'snake';
    snake.body = [];
    snake.status = 'alive';
    snake.direction = Math.floor(Math.random() * 3);
    snake.update = snakeUpdate;
    snake.grow = 0;

    var snakePoint = getRandomCellForSnake(10, retrySpawnLimit);
    var point = snakePoint.point;
    snake.direction = snakePoint.direction;

    logger.log("got random point: x=" + point.x + "  y=" + point.y);
    if (typeof(point) === "undefined" || point === null) {
        log("Unable to create snake for player");
        throw "No free space to create snake. Please retry later.";
    }
    var nextPoint = directions.movePoint(point, snake.direction);
    snake.body.push(nextPoint);
    gamefield.setFieldData(nextPoint, snake.id, snake.type, player.color);
    snake.body.push(point);
    gamefield.setFieldData(point, snake.id, snake.type, player.color);
    gameobjects.addObj(snake);

    logger.log("new snake created");
    return (snake);
}

function deleteSnake(snake) {
    logger.log("deleteSnake   Removing snake's body cells: " + snake.body.length);
    for (var point of snake.body) {
        //log("clear   x="+point.x+"   y="+point.y)
        gamefield.setFieldData(point, 'empty', null, null);
    }

    gameobjects.removeObj(snake);
/*
    for (var i = 0; i < gameobjects.getGameObjsArray().length; i++) {
        if (gameobjects.getGameObjsArray()[i] == snake) {
            gameobjects.removeObj(i, 1);
            break;
        }
    }
*/
}

function snakeUpdate(snake) {
    //log("snakeUpdate #"+snake.id);
    if (snake.status == 'frozen' || snake.status == 'dead')
        return;

    var newHeadPoint = directions.movePoint(snake.body[0], snake.direction);
    //log("oldX="+snake.body[0].x+"  oldY="+snake.body[0].y+")   (newX="+newHeadPoint.x+"  newY="+newHeadPoint.y+")");

    if (gamefield.detectOutOfBoundaries(newHeadPoint)) {
        // snake is dead
        snake.status = 'dead';
        logger.log("Snake tried to escape and shot down");
    }
    else {
        // check for barriers/objects and interact with them
        //log(fieldData(newHeadPoint.x,newHeadPoint.y));
        if (gamefield.fieldData(newHeadPoint.x, newHeadPoint.y) != 'empty') {
            //log(fieldData(newHeadPoint.x,newHeadPoint.y));
            var gameObject = gameobjects.getGameObjectById(gamefield.fieldData(newHeadPoint.x, newHeadPoint.y));
            if (typeof(gameObject) !== 'undefined') {
                switch (gameObject.type) {
                    case 'bonus':
                        // snake should eat the bonus
                        logger.log("snake #" + snake.id + " eats bonus  grow:" + gameObject.grow + "   score:" + gameObject.score);
                        bonuslib.deleteBonus(gameObject.id);
                        playerlib.changeScore(snake.player, gameObject.score * playerlib.getPlayerCount());
                        snake.grow = snake.grow + gameObject.grow;
                        break;
                    case 'snake':
                        if (gameObject.body[0].x == newHeadPoint.x && gameObject.body[0].y == newHeadPoint.y) {
                            gameObject.status = 'dead';
                        }
                    default:
                        snake.status = 'dead';
                        logger.log("Snake found something and die. It found: " + gameObject.type);
                        break;
                }
            }
            else {
                logger.log("ERR: snake found undefined object");
            }
        }
        if (snake.status !== 'dead') {
            // snake is alive and moving
            if (snake.grow == 0) {
                var tailPoint = snake.body.pop();
                gamefield.setFieldData(tailPoint, 'empty');
            }
            else {
                //log("Snake is growing  grow="+snake.grow);
                snake.grow--;
            }
            snake.body.unshift(newHeadPoint);
            gamefield.setFieldData(newHeadPoint, snake.id, snake.type, snake.player.color);
        }
    }

}


function getRandomCellForSnake(safetyZoneLength, retriesLimit) {
    var point;
    var direction;
    var fieldWidthCenter = (gamefield.fieldWidth - gamefield.spawnMargin * 2) / 2;
    var fieldHeightCenter = (gamefield.fieldHeight - gamefield.spawnMargin * 2) / 2;
    var retries = 0;
    var checkResult;
    do {
        point = gamefield.getRandomPoint(spawnMargin);

        direction = directions.getDirs().right;
        if (point.x < fieldWidthCenter / 2) {
            direction = directions.getDirs().up;
        }
        if (point.x > fieldWidthCenter / 2 + fieldWidthCenter) {
            direction = directions.getDirs().left;
        }
        if (point.y < fieldHeightCenter / 2) {
            direction = directions.getDirs().down;
        }
        if (point.y > fieldHeightCenter + fieldHeightCenter / 2) {
            direction = directions.getDirs().right;
        }
        checkResult = gamefield.checkNextPoints(point, direction, safetyZoneLength);
    } while (!checkResult && ++retries < retriesLimit);

    if (!checkResult) {
        throw "No space for new snake";
    }

    var snakePoint = new SnakePoint(point, direction);
    return snakePoint;
}