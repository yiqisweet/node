/**
 * @Author: Randy
 * @Date:   2017-08-23 09:31:04
 * @Email:  mynameislxmax@outlook.com
 * @Filename: app.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-23 09:35:43
 */


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var path = require('path');
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
