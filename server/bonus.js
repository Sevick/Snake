/**
 * Created by S on 09.11.2016.
 */

module.exports = {
    newBonus: newBonus,
    deleteBonus: deleteBonus
};

var gameobjects = require(__dirname+'/gameobjects');
var gamefield = require(__dirname+'/gamefield');

const bonusLimit = 25;        // number of bonus can exist simultatiuosly on game field
var bonusCount   = 0;
var bonusDelay   = 5; // in game ticks

var bonusesTypes = [
    {color: "green", grow: 1, score: 5, type: 'bonus'},
    {color: "yellow", grow: 3, score: 10, type: 'bonus'},
    {color: "white", grow: 5, score: 15, type: 'bonus'}
];

function newBonus() {
    
    if (bonusCount >= bonusLimit || Math.random()*bonusDelay >= 1) {
        return;
    }

    //log("newBonus");
    var point = gamefield.randomAvailablePoint(0, 0, 0);	// get free point and check than [count] cells on the direction is free too
    if (typeof(point) === "undefined" || point === null) {
        log("Unable to find space for bonus");
        return null;
    }
    var bonus = new Object();
    var bonusIdx = Math.round(Math.random() * (bonusesTypes.length - 1));
    bonusType = bonusesTypes[bonusIdx];
    bonus.id = gameobjects.getNextObjId();
    bonus.type = 'bonus';
    bonus.body = [];
    bonus.body.push(point);
    bonus.score = bonusType.score;
    bonus.grow = bonusType.grow;
    bonus.color = bonusType.color;
    bonusCount++;
    gamefield.setFieldData(point, bonus.id, bonus.type, bonus.color);
    gameobjects.addObj(bonus);
    return (bonus);
}

function deleteBonus(id) {
    logger.log("deleteBonus   id=" + id);
    bonusCount--;
    var i = gameobjects.getGameObjectById(id);
    gameobjects.removeObj(i,1);
    //gameobjs.splice(i, 1);
}


