/**
 * Created by S on 09.11.2016.
 */


var pointlib = require(__dirname+'/point');


module.exports = {
    cDir: cDir,
    cDirRev: cDirRev,
    movePoint: movePoint,
    getPerpendicular: getPerpendicular,
    getOpposite: getOpposite,
    getDirs: getDirs,
    getReverseDirs: getReverseDirs
}


/*
module.exports = Direction;

function Direction(){
    this.cDir=cDir;
    this.cDirRev=cDirRev;
    this.movePoint=movePoint;
    this.getPerpendicular=getPerpendicular;
    this.getOpposite=getOpposite;
    return this;
};
*/

function getDirs(){
    return cDir;
}


function getReverseDirs(){
    return cDirRev;
}



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

function movePoint(point, direction, threshold) {
    threshold = threshold || 0;
    if (direction == cDir.up) return new pointlib.Point(point.x, point.y - (1 + threshold));
    if (direction == cDir.down) return new pointlib.Point(point.x, point.y + (1 + threshold));
    if (direction == cDir.left) return new pointlib.Point(point.x - (1 + threshold), point.y);
    if (direction == cDir.right) return new pointlib.Point(point.x + (1 + threshold), point.y);
}



function getPerpendicular(direction) {
    var dx = [cDir.left, cDir.right];
    var dy = [cDir.up, cDir.down];
    return dx.includes(direction) ? dy : dx;
}

function getOpposite(dir) {
    return (dir == cDir.left ? cDir.right : (dir == cDir.up ? cDir.down : (dir == cDir.right ? cDir.left : cDir.up)));
}