
//分为静态，实例方法， 实例所有的方法都是存在prototype里，类不允许创建属性，类名字第一个字母大写
//类没有提前声明这么一说，表达式可以进行自执行类
// class Point{  //类声明
//     constructor(x = 0, y = 0){
//         this.x = x;
//         this.y = y;
//     }
//     toString(){
//         console.log('hello',this.x,this.y)
//     }
// }
//
// let ani = new Animal(1,3);
// ani.toString()

// 自执行类表达式
// var point = new class{
//     constructor(x = 0,y=0){
//         this.x = x;
//         this.y = y;
//     }
//
//     toString(){
//         console.log('hello',this.x,this.y)
//     }
// }(1,2)
//
// point.toString()
//

// ----------------- 类表达式 ---------------------
//class 后面加的命名是当前类的名称
// var Point = class s{
//     constructor(x = 0,y=0){
//         s.x = x;
//         s.y = y;
//     }
//
//     toString(){
//         console.log('hello',s.x,s.y)
//     }
// }
//
// let p = new Point();
// p.toString()
//
//


// class Animal{
//     constructor(name = '名字',spe = '物种'){
//         this.name = name;
//         this.spe = spe;
//     }
//
//     sayHi(){
//         console.log('hello',this.name,this.spe);
//     }
// }
//
// class Cat extends Animal{
//     constructor(name,spe){
//         super(name,spe)
//     }
//
//     sayHello(){
//         console.log('child');
//         //子级要用super去调用父级实例方法
//         super.sayHi()
//     }
// }
//
// let cat = new Cat('Tom','猫');
// cat.sayHello()
//

//静态方法
// class Foo{
//     constructor(name = '默认'){
//         this.name = name;
//     }
//     static sayHi(){
//         console.log('hi',this.name)
//     }
// }
// //静态方法，是不可以用实例调出来的，所以要调用静态方法，必须用类调
// class Bar extends Foo{
//     constructor(name){
//         super(name)
//     }
// // 继承时，如果子级想要调用父级静态方法，那么调用的环境必须也是静态方法，在实例方法中不可以调用静态
//     //实例也一样，在静态方法中，不可以调用实例
//     static sayHello(){
//         console.log('child')
//         super.sayHi()
//     }
// }
//
// Bar.sayHello()

// class Abc{
//     constructor(name = '默认'){
//         this.name = name;
//     }
//     static sayHi(){
//         console.log('hi',this.name)
//     }
// }
//
// Abc.sayHi()


// ---------------------- es5 中的静态和实例 -------------------

//function Point(){
    //这个叫做工厂模式
//    this.name = 2;//实例
//}
//Point.abc = 1; //静态方法

//这个就是原型模式
//Point.prototype.a = 1; //实例

//var p = new Point();
//console.log(p.a)
//console.log(p.name)
