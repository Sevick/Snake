/**
 * Created by S on 09.11.2016.
 */

module.exports = {
    init: initConfig,
    write: writeConfig,
    getPort: getConfigPort
};

var fs = require('fs');

var config = {port: 3000};

function initConfig() {
    logger.log("Reading config");
    try {
        var configFile = fs.readFileSync(configpath + 'snakes.conf', 'utf8', 'r');
        if (typeof(configFile) === 'undefined' || configFile == null) {
            writeConfig();
        }
        else {
            config = JSON.parse(configFile);
        }
    }
    catch (err) {
        writeConfig();
    }
    return configFile;
}



function writeConfig() {
    logger.log("writeConfig");
    logger.log(config);
    fs.writeFileSync(__dirname + '/config/snakes.conf', JSON.stringify(config));
}

function getConfigPort(){
    return config.port;
}