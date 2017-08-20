/**
 * @Author: Randy
 * @Date:   2017-08-21 09:42:40
 * @Email:  mynameislxmax@outlook.com
 * @Filename: readFile.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 09:49:23
 */

'use strict';

//nodejs 核心模块 操作文件
var fs = require('fs');

fs.exists('./text.txt',function(exists){
  if(exists){
    // readFile 异步读取，
    //文件路径，选项，回调(err,data)
    fs.readFile('./text.txt','utf-8',function(err,data){
       console.log(data);
       if(!err){
         //writeFile
         //文件路径，数据，选项，回调(err)
         fs.writeFile('./text2.txt',data,function(err){
           console.log(err);
         });
       }
    });
  }else{
    console.log('文件不存在');
  }
});
