
//es5
// function point(){}; //函数声明
// var point = function(){}; //函数表达式

//es6 只能写表达式

// var point = () => {console.log(1)}  // 左边如果 没有参数，那么 需要加小括号
// var point2 = a => {console.log(1)}; // 左边如果 有一个参数，那么 不需要加小括号
// var point3 = (a,b) => {console.log(1)}; //左边如果 有两个含以上的参数，那么需要加括号
// var point4 = a => a; // 右边 如果只有一条语句，那么不需要加大括号，自动带上return处理
// var point5 = a => {var name =a ; return name} ; //右边 如果多条语句，那么需要加大括号，并且不会自动带上return


//自动绑定创建时所在的作用域
// var o = {
//     a : 12,
//     func : function(){console.log(this.a)},
//     test : function(){
//         setTimeout(()=>{this.func()},2000)
// }
// };
// o.test();

//this指向不可更改
var birth = 1998;
var o = {
   birth : 1999,
   test:function(year){


       let fun = (y) =>{
           console.log(this.birth);
           console.log(y);
           return y - this.birth;
       }
       return fun.call({birth:2001},year);
   }
}

console.log(o.test(2000))
