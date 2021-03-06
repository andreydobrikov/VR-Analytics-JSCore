/**
 * @module Logger
 * @description Used to control logging to console based on log level.
 * Log levels are: 0 - Log nothing, 1 - Only error, 2 - Till Warnings, 3 - till Info,
 * 4 - Log everything including debug  
 */

let logLevel = 4;

const consoleError = console.error.bind(console, 'Vadr Analytics:');
const consoleWarn = console.warn.bind(console, 'Vadr Analytics:');
const consoleInfo = console.info.bind(console, 'Vadr Analytics:');
const consoleDebug = console.log.bind(console, 'Vadr Analytics:');

/**
 * Get log level for analytics
 * @memberof Logger
 * @returns {number} 
 */
function getLogLevel(){
    return logLevel;
}

/**
 * Set log level for analytics
 * @memberof Logger
 * @param {number} level Integer logLevel value between 0 and 4
 */
function setLogLevel(level){

    level = level > 0 ? level : 0;
    level = level < 4 ? level : 4;
    level = parseInt(level);
    
    logLevel = level; 

}

/**
 * Log error 
 * @memberof Logger
 * @param {arguments} log arguments 
 */
function error(){

    if (logLevel >= 1){
        consoleError.apply(console, arguments);
    }

}

/**
 * Log warning 
 * @memberof Logger
 * @param {arguments} log arguments 
 */
function warn(){
    
    if (logLevel >= 2){
        consoleWarn.apply(console, arguments);
    }

}

/**
 * Log info 
 * @memberof Logger
 * @param {arguments} log arguments 
 */
function info(){
    
    if (logLevel >= 3){
        consoleInfo.apply(console, arguments);
    }

}

/**
 * Log debug messages 
 * @memberof Logger
 * @param {arguments} log arguments 
 */
function debug(){

    if (logLevel == 4){
        consoleDebug.apply(console, arguments);
    }

}
        
export default {
    getLogLevel,
    setLogLevel,
    error,
    warn,
    info,
    debug
};