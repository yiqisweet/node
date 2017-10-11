/**
 * @Author: Randy
 * @Date:   2017-08-22 03:18:15
 * @Email:  mynameislxmax@outlook.com
 * @Filename: server-ejs
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-22 03:36:12
 */
 'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'/public')))
app.engine('html',require('ejs').__express); //把ejs后缀替换html
app.set('view engine','html');//视图引擎后缀
app.set('views',__dirname+'/views'); //设置访问路径

app.engine('html',require('ejs').__express);
app.set('view engine',html);
app.set('views',__dirname+'/views')


app.get('/',function(req,res){
   res.render('index',{
     title : 'Express',
     flag : true,
     list : [1,2,3,4,5]
   })
})


server.listen(3040);
