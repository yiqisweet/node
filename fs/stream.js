/**
 * @Author: Randy
 * @Date:   2017-08-21 09:49:53
 * @Email:  mynameislxmax@outlook.com
 * @Filename: stream.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 10:12:03
 */

'use strict';

var fs = require('fs');


fs.exists('./test.mp4',function(exists){
  if(exists){
      //创建读取流,往缓冲区里读
      //缓冲区存的是buffer
      // 每次读取默认大小到缓冲区
    var rs = fs.createReadStream('./test.mp4');
    //创建写入流
    var ws = fs.createWriteStream('./test2.mp4'); //默认16kb

    rs.on('open',function(){
      console.log('开始读取');
    });

    //每次读取固定的字符，由chunk返回
    rs.on('data',function(chunk){
      if(ws.write(chunk) === false){
        //如果写入的速度跟不上读取的速度，有可能导致数据丢失。正常的情况应该是，写完一段，再读取下一段，如果没有写完的话，就让读取流先暂停，等写完再继续
        rs.pause();
      }
    });

//当写完了
    ws.on('drain',function(){
        rs.resume(); //再触发恢复data事件
    });
    rs.on('end',function(){
      ws.end(); // 关闭写入流
      console.log('读取结束');
    });

    rs.on('close',function(){
      console.log('关闭读取流');
    });
  }else{
    console.log('文件不存在');
  }
});
