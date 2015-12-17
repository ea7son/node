/**
 * Created by zhangruofan on 2015/12/15.
 */
ALY=require("aliyun-sdk");
var Promise=require("bluebird");
exports.index=function *(){
    var sts = new ALY.STS({
        format:"json",
        accessKeyId: "Y0Cl7rghjwWL4u0X",
        secretAccessKey: "gExhZFFQ3mXQV3wWDdc6n5jouxEFL2",
        endpoint: 'https://sts.aliyuncs.com',
        apiVersion: '2015-04-01'
    });
    Promise.promisifyAll(sts);
    yield this.body=sts.assumeRoleAsync({
        Action: 'AssumeRole',
        // 指定角色Arn
        RoleArn: 'acs:ram::1757977041878097:role/aliyunosstokengeneratorrole',
        //设置Token的附加Policy，可以在获取Token时，通过额外设置一个Policy进一步减小Token的权限；
        //Policy: '{"Version":"1","Statement":[{"Effect":"Allow", "Action":"*", "Resource":"*"}]}',
        //设置Token有效期，可选参数，默认3600秒；
        //DurationSeconds: 3600,
        RoleSessionName: 'node'
    }).catch(function(err){
        console.error(err);
    });
};