/**
 * @Author: Randy
 * @Date:   2017-08-21 10:12:53
 * @Email:  mynameislxmax@outlook.com
 * @Filename: pipe.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 10:15:47
 */


'use strict';
var fs = require('fs');

fs.exists('./test.mp4',function(exists){
  if(exists){
     //简化版文件复制,适合对小文件操作，因为小文件不会写入速度跟不上读取速度
      fs.createReadStream('./test.mp4').pipe(fs.createWriteStream('./test2.mp4'));
  }else{
      console.log('没有文件');
  }
});
