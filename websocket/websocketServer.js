/**
 * @Author: Randy
 * @Date:   2017-08-21 04:24:58
 * @Email:  mynameislxmax@outlook.com
 * @Filename: websocketServer.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 11:33:44
 */

'use strict';

var Server = require('ws').Server;

var ws = new Server({
  port : 3080
});

var listScoket = {};
var i = 0;

//有用户连接成功触发connection事件，回调客户端对象
ws.on('connection',function(socekt){
  i += 1;
     listScoket[i] = socekt;
  socekt.send('你好客户端');
    socekt.on('message',function(msg){
      for(let j = 1;j <= i; j++){
        listScoket[j].send(msg);
      }
      // socekt.send('发送成功');
      // console.log(`服务器收到消息${msg}`);
    });
});

// new Server({
//   port : 8080
// }).on('connection',function(socket){
//   this.on('message',function(msg){
//     console.log(`服务器收到消息${msg}`);
//   });
// });
