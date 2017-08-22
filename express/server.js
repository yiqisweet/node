/**
 * @Author: Randy
 * @Date:   2017-08-22 02:48:03
 * @Email:  mynameislxmax@outlook.com
 * @Filename: server.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-22 03:06:10
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


//all可以拦截任何请求动词
// app.all('/',function(req,res){
//     res.send('被all拦截'); // write end;
// })

//get 只拦截get请求
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/about',function(req,res){
  res.send('about');
});


app.post('/login',function(req,res){
  console.log(req.body);
    if(req.body.uname && req.body.upwd){
      res.send({msg:'登录成功',code:'20000'})
    }
})

server.listen(3040);
