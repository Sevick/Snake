/**
 * Created by S on 09.11.2016.
 */


module.exports = {
    getNextObjId: getNextObjId,
    addObj: addObj,
    removeObj: removeObj,
    update: update,
    getGameObjectById: getGameObjectById,
    getGameObjsArray: getGameObjsArray
}


var lastGameObjId = 100;

var gameobjs = [];


function getGameObjsArray(){
    return gameobjs;
}

function getNextObjId() {
    lastGameObjId++;
    return (lastGameObjId);
}

function addObj(newObject){
    gameobjs.push(newObject);
}

function removeObjByIdx(idx,len){
    return gameobjs.splice(idx,len);

}


function removeObj(obj){
    for (var i = 0; i < gameobjs.length; i++) {
        if (gameobjs[i] == obj) {
            removeObjByIdx(i, 1);
            break;
        }
    }

}


function update(){
    for (var i = 0; i < gameobjs.length; i++) {
        if (typeof(gameobjs[i]) !== 'undefined' && typeof(gameobjs[i].update) != "undefined") {
            gameobjs[i].update(gameobjs[i]);
        }
    } 
}

function getGameObjectById(id) {
    var index = gameobjs.map(function (el) {
        return el.id;
    }).indexOf(id);
    return gameobjs[index];
}