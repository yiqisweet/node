/**
 * @Author: Randy
 * @Date:   2017-08-22 02:48:03
 * @Email:  mynameislxmax@outlook.com
 * @Filename: server.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-22 06:02:20
 */

'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var server = require('http').createServer(app);
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.urlencoded({ //注册获取拦截参数功能
  extended : true
}));

//中央批钱给村里，批了一百
app.use(function(req,res,next){
  res.money = 100;
  next();
});

//省里 扣了30
app.use(function(req,res,next){
  res.money = res.money - 30;
  next();
})
//市里 又扣了30
app.use(function(req,res,next){
  res.money = res.money - 30;
  next();
})
//村行又拿十块
app.use(function(req,res,next){
  res.money = res.money - 10;
  next();
});

app.get('/',function(req,res){
  console.log(req.host);
  console.log(req.params);
  console.log(req.path);
  res.sendFile(path.join(__dirname,'index.html'));
});


server.listen(3040);
