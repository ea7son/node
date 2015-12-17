/**
 * Created by zhangruofan on 2015/12/15.
 */
ALY=require("aliyun-sdk");

// 构建一个 Aliyun Client, 用于发起请求
// 构建Aliyun Client时需要设置AccessKeyId和AccessKeySevcret
// STS是Global Service, API入口位于杭州, 这里使用sts API的主地址
var sts = new ALY.STS({
    format:"json",
    accessKeyId: "Y0Cl7rghjwWL4u0X",
    secretAccessKey: "gExhZFFQ3mXQV3wWDdc6n5jouxEFL2",
    endpoint: 'https://sts.aliyuncs.com',
    apiVersion: '2015-04-01'
});

// 构造AssumeRole请求
sts.assumeRole({
    Action: 'AssumeRole',
    // 指定角色Arn
    RoleArn: 'acs:ram::1757977041878097:role/aliyunosstokengeneratorrole',
    //设置Token的附加Policy，可以在获取Token时，通过额外设置一个Policy进一步减小Token的权限；
    //Policy: '{"Version":"1","Statement":[{"Effect":"Allow", "Action":"*", "Resource":"*"}]}',
    //设置Token有效期，可选参数，默认3600秒；
    //DurationSeconds: 3600,
    RoleSessionName: 'node'
}, function (err, res) {
    console.log(err, res);
});