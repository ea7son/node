/**
 * Created by zhangruofan on 2015/12/14.
 */
var app=require('koa')(),
    surface=require('surface'),
    //config=require('./config.json')
    logger = require("./logger")
    ;

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    logger.debug('%s %s - %s', this.method, this.url, ms);
});
app.on('error', function (err, ctx) {
    logger.error('server error', err, ctx);
});
surface(app,{
    authenticate:function *(){
        //console.log(this.query);
        return true;
    },
    deny:function *(){
        this.body="action denied";
    },
    authenticatePattern: /^\//
});
module.exports=app;
