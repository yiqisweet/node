/**
 * @Author: Randy
 * @Date:   2017-08-23 09:31:04
 * @Email:  mynameislxmax@outlook.com
 * @Filename: app.js
 * @Last modified by:
 * @Last modified time: 2017-08-29T21:12:52+08:00
 */


var express = require('express');
var app = express();
//获取参数包
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var path = require('path');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird')
global.dbHandel = require('./database/dbHandel');
global.db = mongoose.connect('mongodb://localhost:27017/school',{
  useMongoClient:true
});
//静态
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',path.join(__dirname,'views'));

app.use('/',routes);
app.use('/login',routes);
app.use('/register',routes);
app.use('/home',routes);



app.listen(3090);
