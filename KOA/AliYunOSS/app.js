/**
 * Created by zhangruofan on 2015/12/14.
 */
var app=require('koa')(),
    path = require('path'),
    logger = require('koa-logger'),
    surface=require('surface'),
    config=require('./config.json'),
    surface_config=require('./surface_config.js');

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});
app.on('error', function (err, ctx) {
    logger.error('server error', err, ctx);
});
surface(app,surface_config);
module.exports=app;
