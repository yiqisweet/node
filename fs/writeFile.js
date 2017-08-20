/**
 * @Author: Randy
 * @Date:   2017-08-21 02:34:09
 * @Email:  mynameislxmax@outlook.com
 * @Filename: writeFile.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-21 02:41:17
 */

'use strict';

var fs = require('fs');

for(let i=0;i<20;i++){
  console.log('写入中.....');
  fs.readFile('./test.mp4',function(err,data){
    if(!err){
      fs.writeFile('./test2.txt',data,{flag:'a+'},function(err){
        console.log(err);
        console.log('写入完成......');
      });

    }
  });
};
