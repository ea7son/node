/**
 * Created by zhangruofan on 2015/12/17.
 */
var supertest = require("supertest");
var assert = require('assert');
var server=supertest.agent("http://localhost:3000");
describe("User", function () {
    describe("#get()", function () {
        it('data should be get', function (done) {
            server
                .get("/user")
                .end(function(err,res){
                    if(err)
                        return done(err);
                    assert.equal("get",res.body.data);
                    done();
                });
        });
    });
    describe("#create()", function () {
        it('data should be post', function (done) {
            server
                .post("/user")
                .end(function(err,res){
                    if(err)
                        return done(err);
                    assert.equal("post",res.body.data);
                    done();
                });
        });
    });
});