//弱引用
//如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
//WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，
//运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

const obj = {};
const foo = {};
let ws = new WeakSet(); //可接受数组或者类似数组
//ws.add(1);报错 成员只能是对象
ws.add(obj);
ws.add(foo)
console.log(ws.has(obj))

