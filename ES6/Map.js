
//因为之前的对象，键 只能存储字符串，不可以是引用，对象，数组，而Map就是为了解决这个而出现的
//Map的键可以是任意类型的
// let e1 = document.getElementById('div1');
// var o = {}
// o[el] = 'content';
// console.log(o)


// let m = new Map();
// var o = {
//   a : 1
// }
//
// m.set(o,'content');
// console.log(m.get(o))

// var arr = [1,2,3]
// m.set(arr,'content');
// console.log(m.get(arr))

// m.set('123','content');
// console.log(m.has('123'))

// for(let i of m.entries()){
//   console.log(i)
// }
// m.forEach(function(item){
//   console.log(item)
// })


//可以接受数组为参数
// let m = new Map([
//   [1,2,5],
//   [3,4]
// ])
// console.log(m.get(5))

let m = new Map();
// m.set([1,2,3],'content');
// console.log(m.get([1,2,3]));
//
var a = [1,2,3];
var b = a ;
a = [ 2,3];

m.set(a,'content');
console.log(m.get(b));