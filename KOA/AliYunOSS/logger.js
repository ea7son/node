/**
 * Created by zhangruofan on 2015/12/16.
 */
var fs = require("fs");
var errorDir = "logs/error"
    infoDir = "logs/info";

if (!fs.existsSync(errorDir)) {
    fs.mkdirSync(errorDir);
}
if (!fs.existsSync(infoDir)){
    fs.mkdirSync(infoDir);
}
var winston = require("winston");
var dailyRotateFile = require("winston-daily-rotate-file");
var logger = new winston.Logger({
    level: "debug",
    exceptionHandlers: [
        new winston.transports.File({
            filename: "logs/exceptions.log"
        })
    ],
    transports: [
        new winston.transports.Console({
            level:"debug",
            name:"console",
            handleExceptions:true,
            prettyPrint:true,
            colorize:true,
            json:false,
            showLevel:true,
            slient:false,
            timestamp:false
        }),
        new dailyRotateFile({
            level: "error",
            showLevel: false,
            name: "error",
            filename: errorDir+"/error",
            handleExceptions: false,
            prettyPrint: true,
            timestamp: true,
            colorize: true,
            maxsize: 5242880,
            maxFiles: 10,
            json:false
        }),
        //new dailyRotateFile({
        //    level: "info",
        //    name: "info",
        //    showLevel:false,
        //    handleExceptions: false,
        //    filename: infoDir+"/info",
        //    prettyPrint: true,
        //    timestamp: true,
        //    colorize: true,
        //    maxsize: 5242880,
        //    maxFiles: 10,
        //    json:false
        //})
    ],
    exitOnError: false
});
module.exports = logger;