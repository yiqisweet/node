/**
 * @Author: Randy
 * @Date:   2017-08-23 10:16:14
 * @Email:  mynameislxmax@outlook.com
 * @Filename: hello.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-23 10:20:42
 */

var hello_getRandom = require('./hello_getRandom')

var hello = {};

hello.hello = function(req,res){
  var random = hello_getRandom()
      res.send(""+random);
}

module.exports = hello;
