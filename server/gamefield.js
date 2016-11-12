/**
 * Created by S on 09.11.2016.
 */

var pointlib = require(__dirname+'/point');
var directions = require(__dirname+'/directions');

module.exports = {
    fieldWidth: fieldWidth,
    fieldHeight: fieldHeight,

    init: init,
    CellValue: CellValue,
    fieldData: fieldData,
    setFieldData: setFieldData,
    getClearField: getClearField,
    getRandomPoint: getRandomPoint,
    detectOutOfBoundaries: detectOutOfBoundaries,
    randomAvailablePoint: randomAvailablePoint,
    getCommandsStack: getCommandsStack,
    clearCommandsStack: clearCommandsStack,
    checkNextPoints: checkNextPoints,
    getField: getField,
    getFieldWidth: getFieldWidth,
    getFieldHeight: getFieldHeight
};

const spawnMargin   = 10;
const fieldWidth    = 100;     // width in cells
const fieldHeight   = 50;     // height in cells
const retryLimit    = 10;              // number of tries to find free space to spawn

var field = [];   // fieldWidth*fieldHeight  [GameObject 'objecttype']
var commandsStack = [];


function getFieldWidth(){
    return fieldWidth;
}

function  getFieldHeight() {
    return fieldHeight;
}


function getField(){
    return field;
}

function CellValue(id, type, color) {
    this.id = id;
    this.color = color;
    this.type = type;
}


function init(){
    field = getClearField();
}


function getCommandsStack(){
    return commandsStack;
}

function clearCommandsStack() {
    commandsStack = [];
}

function fieldData(x, y) {
    if (field[x + y * fieldWidth].id == 'empty') {
        return 'empty';
    }
    else {
        return (field[x + y * fieldWidth].id);
    }
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


function getClearField() {
    var clearField = new Array(fieldHeight * fieldWidth);
    var emptyFieldData = new Object();
    emptyFieldData.id = 'empty';
    emptyFieldData.color = null;
    clearField.fill(emptyFieldData);
    logger.log("field created");
    return clearField;
}


function getRandomPoint(margin) {
    margin = margin || spawnMargin;

    return pointlib.Point(
        Math.round(margin + (fieldWidth - margin * 2) * Math.random()),
        Math.round(margin + (fieldHeight - margin * 2) * Math.random())
    );
}


function detectOutOfBoundaries(curPoint) {
    return curPoint.x < 0 || curPoint.x >= fieldWidth
        || curPoint.y < 0 || curPoint.y >= fieldHeight;
}


function randomAvailablePoint(direction, count, margin) {
    //log("randomAvailablePoint");
    var point = getRandomPoint(spawnMargin);
    var retryCount = 0;


    while (!checkNextPoints(point, direction, count) && ++retryCount < retryLimit) {
        point = getRandomPoint(spawnMargin);
    }
    if (retryCount >= retryLimit) {
        logger.log('unable to find free space');
        return (new pointlib.Point(0, 0));
    }
    //logger.log("randomAvailablePoint completed");
    return (point);
}


function checkNextPoints(point, direction, count) {
    var curPoint = point;
    for (var i = 0; i <= count; i++) {
        if (fieldData(curPoint.x, curPoint.y) != 'empty') {
            //logger.log("free space check failed. Found: "+fieldData(curPoint.x,curPoint.y));
            return (false);
        }
        else {
            //logger.log("free space check passed. Found: " + fieldData(curPoint.x, curPoint.y));
        }
        curPoint = directions.movePoint(point, direction);
    }
    return (true);
}


