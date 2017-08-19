var path = require('path');

var p = 'd:/abc\\\/a//c/abc.js'

//规范化路径
// console.log(path.normalize(p));



var path1 = 'd:/abc';
var path2 = '/ccc/abc';
var path3 = '\d/f/e.js';

//合并路径
// console.log(path.join(path1,path2,path3));

//获取绝对路径，加../ 忽略上一级路径
// console.log(path.resolve('./ES6/class.js'))

var from = 'd:/abc/e.js';
var to = 'd:/abc/cba/j.js';
//from 从哪来，to 到哪里去，返回在from的路径里面如何使用相对路径找到 to的路径
// console.log(path.relative(from,to))

//获取当前绝对路径
// console.log(__dirname)
