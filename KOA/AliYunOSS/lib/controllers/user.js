/**
 * Created by zhangruofan on 2015/12/17.
 */
var parser = require("co-body");
exports.index = function*(next) {
    this.body = 'get';
};
exports.create = function*(next) {
    this.body = "post";
};
exports.get = function*(next) {
    this.body = this.params.id;
};
exports.update = function*(next) {
    var body = yield parser(this.req);
    this.body = body;
},
exports.del = function*(next) {
    var id = this.params.id;
    if (typeof id == "undefined") this.body = "参数错误";
    this.body = "del id:" + id;
};
