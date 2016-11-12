/**
 * Created by S on 09.11.2016.
 */



module.exports = {
    topScore: topScore,
    init: initTopScores,
    write: writeTopScore,
    checkTopScore: checkTopScore,
    getTopScores: getTopScores
};

var topScoreFullPath=topscorepath+'/snakes.score';

var fs = require('fs');
var topScoresLimit = 10;
var topScores = [];

function topScore(name, score, date) {
    this.name = name;
    this.score = score;
    this.date = date;
}

function getTopScores(){
    return topScores;
}


function initTopScores(configFile) {
    logger.log("Loading top scores");
    try {
        var topScoreFile = fs.readFileSync(topScoreFullPath, 'utf8', 'r');
        if (typeof(topScoreFile) !== 'undefined' || topScoreFile != null) {
            //log(topScoreFile);
            topScores = JSON.parse(topScoreFile);
            topScores.sort(function (a, b) {
                return (b.score - a.score);
            });
            //log(topScores);
        }
    }
    catch (err) {
        logger.log("Error reading /data/snakes.score");
    }
}


function writeTopScore() {
    fs.writeFile(topScoreFullPath, JSON.stringify(topScores));
    logger.log("writeTopScore done");
}


function checkTopScore(player) {
    if (typeof(player) === 'undefined' || player == null) {
        return (false);
    }
    logger.log("checkTopScore");
    var newRecord = false;
    var topIdx = 0;
    if (player.score == 0 || player.score < topScores[topScores.length - 1]) {
        return false;
    }

    if (topScores.length < topScoresLimit) {
        newRecord = true;
    }
    else {
        for (topIdx in topScores) {
            if (topScores[topIdx].score < player.score) {
                newRecord = true;
                break;
            }
        }
    }
    if (newRecord) {
        logger.log("Adding topscore record: idx=" + topIdx + " with score=" + player.score);
        topScores.splice(topIdx, 0, new topScore(player.name, player.score, new Date()));
        if (topScores.length > topScoresLimit) {
            topScores.splice(topScoresLimit);
        }
        topScores.sort(function (a, b) {
            return (b.score - a.score);
        });
        writeTopScore();
        return (true);
    }
    return (false);
}

