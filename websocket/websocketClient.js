/**
 * @Author: Randy
 * @Date:   2017-08-21 04:28:43
 * @Email:  mynameislxmax@outlook.com
 * @Filename: websocketClient.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 04:47:09
 */


'use strict';
//引用ws模块
var WebSocket = require('ws');
//链接设定好的端口
var ws = new WebSocket('ws://localhost:3080');

//连接成功时会触发open事件
ws.on('open',function(){
  // console.log('连接成功');
  //send 给服务器发送消息
  // ws.send('你好服务器');
});

setTimeout(function(){
    ws.send('大家好');
},10000);

//服务器如果发送消息，触发message事件，回调带参msg
ws.on('message',function(msg){
  console.log(`收到服务器消息${msg}`);
});
