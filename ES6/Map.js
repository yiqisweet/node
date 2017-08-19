
// const data = {};
// const element = document.getElementById('myDiv');
//
// data[element] = 'metadata';
// data['[object HTMLDivElement]'] // "metadata"


/*
上面代码原意是将一个 DOM 节点作为对象data的键，
但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]。
 */
/*
为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，
也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
 */

// let m = new Map();
// let o = {p : 'hello'};
// m.set(o,'content');
// console.log(m.get(o));
// m.has(o) // true
// m.delete(o) // true
// m.has(o) // false

//可接受数组作为参数
// let m = new Map([['name','张三']]);
// console.log(m.get('name'))
//
// let items = [
//     ['name','张三'],
//     ['title','author']
// ]
//
// let m = new Map();
//
// items.forEach(function([key,value]){
//     m.set(key,value)
// });

// console.log(m.get('title'))

let items = [
    ['name','张三'],
    ['title','author']
]

let m = new Map(items);
for(let i of m.entries()){
    console.log(i)
}