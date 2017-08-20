/**
 * @Author: Randy
 * @Date:   2017-08-21 02:04:39
 * @Email:  mynameislxmax@outlook.com
 * @Filename: copy.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 03:40:33
 */

'use strict';
//完整版 复制功能

//已完成 1MB,10%,速度:1MB/S
//共用时 10秒，总共大小10MBk


var fs = require('fs'),
    out = process.stdout;

var rs = fs.createReadStream('');
var ws = fs.createWriteStream('');

//获取文件信息
var file = fs.statSync('');

//获取文件大小，获取的是字节;
var totalSize = file.size;

//获取当前已经赋值多少字节长度
var passedLength = 0;
//上一次赋值文件的大小
var lastSize = 0;
var startTime = Date.now();

rs.on('data',function(chunk){
  passedLength += chunk.length;
  if(ws.write(chunk) === false){
    rs.pause();
  }
});


rs.on('end',function(){
  ws.end();
});

ws.on('drain',function(){
  rs.resume();
});

setTimeout(function show(){
  //求百分比
  var percent = Math.ceil((passedLength / totalSize) * 100);
  //求已经完成的大小 转换成MB   求出了当前的MB
  var size =  Math.ceil(passedLength / 1000000);
  //求速度 已知条件 当前大小和上一次大小（第一次是0）
  var diff = size - lastSize;
  lastSize = size;

out.clearLine();
out.cursorTo(0);
out.write(`已完成${size}MB,${percent}%，速度是${diff * 2}MB/S`);
  //如果已经传过来的字节长度小于总共字节长度，那么就代表没有传输完
  if(passedLength < totalSize){
    setTimeout(show,500);
  }else{
    console.log();
    var endTime = Date.now();
    console.log(`用时:${(endTime - startTime) / 1000}秒，总共${size}MB`);
  }

},500);
