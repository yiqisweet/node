/**
 * @Author: Randy
 * @Date:   2017-08-23 10:16:14
 * @Email:  mynameislxmax@outlook.com
 * @Filename: hello.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-23 09:00:07
 */
 'use strict';

var hello_getRandom = require('./hello_getRandom');

var hello = {};

hello.hello = function(req,res){
      res.send("随机数是:"+hello_getRandom());
};

module.exports = hello;
