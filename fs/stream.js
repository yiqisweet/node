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
      //如果超过这个大小，就停止读取资源文件，默认值是64KB
    var rs = fs.createReadStream('./test.mp4'); //默认读取64KB
    //缓存区存的是cache
    //创建写入流
    //每次触发write的时候，是写入到了缓存区，而不是直接写到了文件里，
    //当缓存区满的时候，会把缓存区的内容一次性写入到文件当中
    var ws = fs.createWriteStream('./test2.mp4'); //默认16kb

    rs.on('open',function(){
      console.log('开始读取');
    });

    //每次读取固定的字符，由chunk返回
    rs.on('data',function(chunk){
      if(ws.write(chunk) === false){
        rs.pause(); //缓存区已满的时候会停止读取事件，防止写入速度跟不上读取速度，从而导致读取关闭，写入也会关闭
      }
    });

//当缓存区的东西已经都倒出去(写入到文件)的时候
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
