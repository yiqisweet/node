//WeakSet 成员只能是对象，弱引用，常用语存储DOM节点，当DOM节点删除时，自动删除WeakSet存储的数据
//弱引用，指的是垃圾回收机制里的计数机制，
//计数 ： 当一个对象被引用一次的时候 计数是1（弱引用），当被引用2次的时候，计数是2（强引用）

//var o = {
  //a : 1
//}

//let ws = new WeakSet();
//ws.add(o);
//ws.delete(o);
//console.log(ws.has(o))
