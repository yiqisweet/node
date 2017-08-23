/**
 * @Author: Randy
 * @Date:   2017-08-23 08:54:46
 * @Email:  mynameislxmax@outlook.com
 * @Filename: dbHandle.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-23 08:58:00
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = require('./model');

for(var m in model){
  mongoose.model(m,new Schema(model[m]));
}

module.exports = {
  getModel :_getModel
};
function _getModel(type){
  return mongoose.model(type);
}
