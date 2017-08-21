/**
 * @Author: Randy
 * @Date:   2017-08-22 10:05:06
 * @Email:  mynameislxmax@outlook.com
 * @Filename: server.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-22 10:56:30
 */

'use strict';

//框架 自带微型服务器
var express = require('express');
var app = express();
var path = require('path');

//设置静态访问目录
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.readFile(path.join(__dirname, 'index.html'));
});

//让http服务器使用express规则
var server = require('http').createServer(app);
//创建socket.io服务器，需要sever服务器支持
var io = require('socket.io')(server);
var clients = {};

io.on('connection', function(socket) {
  var username;
  socket.send({
    user: '系统消息',
    content: '请输入您的昵称'
  });

  socket.on('message', function(msg) {
    var result = msg.match(/^@(.+)\s(.+)$/);
    if (result) {
        var toUser = result[1];
         if(clients[toUser]){
             socket.send({user:username,content:'[私聊]'+msg});
             clients[toUser].send({user:username,content:'[私聊]'+msg});
         }else{
           socket.send({user:'系统消息',conetnt:'该用户不存在或者不在线'});
         }
    } else {
      //如果有的话，就代表已经不是第一次输入了
      if (username) {
        for (let i in clients) {
          clients[i].send({
            user: username,
            content: msg
          });
        }
      } else {
        if(clients[username]){
          socket.send({
            user: '系统消息',
            content: '该用户名已经存在:'
          });
        }else{
          username = msg;
          clients[username] = socket;
          socket.send({
            user: '系统消息',
            content: '欢迎您:' + username
          });
        }

      }
    }


  });
});



server.listen(3090);
