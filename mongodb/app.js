/**
 * @Author: Randy
 * @Date:   2017-08-23 01:11:27
 * @Email:  mynameislxmax@outlook.com
 * @Filename: app.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-23 01:31:25
 */

'use strice';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var db =  mongoose.connect('mongodb://127.0.0.1:27017',{
  useMongoClient : true
}).then(function(db){

})


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var db = mongoose.connect('mongodb://127.0.0.1:27017',{
  useMongoClient : true
}).then(function(db){
  console.log(1);

  //用来定义表结构
  var PersonShema = mongoose.Schema({
    name : {type : String},
    age : {type : Number,default:0}
  });

//用来操作数据库的
var PersonModle = db.model('students',PersonShema);

  PersonModle.create({age:99},function(err,docs){
    console.log(docs);
  });

  //基本的find查询，第一个参数是查询条件，第二个回调(err,docs)
  PersonModle.find({name : '李鑫'},function(err,docs){
    console.log(docs);
  });

  PersonModle.findOne({age : 20},function(err,doc){
    console.log(doc);
  });

//第二个参数，设置返回字段
PersonModle.find({age : 20},'name',function(err,docs){
  console.log(docs);
});

//根据条件删除
PersonModle.remove({age:20},function(err,doc){

})

//修改，第一个参数是查询条件，第二个参数是修改值
//如果添加第三个参数，{multi:true},则更新全部

PersonModle.update({age:18},{age:999},{multi:true},function(err,docs){

})

//不包含
PersonModle.find(
  {
      name :{
        $ne :'李鑫'
      }
  }
)

//包含

PersonModle.find({
  age : {
    $in:[19,25]
  }
});
//$or 或者 哪个条件有，筛选谁，如果都有，全部筛选
PersonModle.find({
    "$or" : [
      {name : '李鑫999'},
      {age : 19}
    ]
},function(err,doc){

})

//$exists  如果设置为true ，就筛选带有name的数据，反之是筛选不带有name的数据
PersonModle.find({name : {$exists : false}},function(err,docs){

});

//并且和或

PersonModle.find({
  age : 19,
  "$or" : [
    {name : '张三'},
    {name : '李四'}
  ]
})

//limit 显示几条，skip跳过，sort :1 是shengx升序，-1是降序
PersonModle.find({},{},{limit:5,skip:0,sort:1},function(err,doc){

})



});
