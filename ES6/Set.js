
// 例一， 可接受数组的参数，成员唯一
// let s = new Set([1,2,3,4,5,1,1,1,2,3,4,5,4,4,4,4,4,4,4]);
// ... 平铺
// console.log(...s)


//例二、不会类型转换
//  let s = new Set();
//  [1,2,3,4,5,6,7,'1','2','3'].map(item => {s.add(item)})
//
//  console.log(...s)
//


// 例三，可接受类似数组
function divs(){
  return document.querySelectorAll('div');
}
let set = new Set(divs());
console.log(...set)
console.log(set.size)


//clear 清空所有 无返回
// let s = new Set([1,2,3,4,5]);
// s.clear();
// console.log(...s)


//数组去重
// var arr = [1,2,3,4,5,5,5,5,5];
// let s = new Set(arr);
// var newArry = [...s]
// console.log(newArry)

// has 查找值是否存在，delete 删除输入的值，成功true，失败false
// let s = new Set([1,2,3,4,5,6]);
// console.log(s.has('1'))
// console.log(s.delete(1))
// console.log(s.has(1))



//对于NaN Set 当做相等类型数据
// let s =new Set();
// s.add(NaN);
// s.add(NaN);
// console.log(...s)

//对象永远是不相等的
// let ss = new Set();
// ss.add({});
// ss.add({});
// console.log(...ss);


//Set 支持遍历 keys() values() entries() forEach()
// let s = new Set([1,2,3,4,5]);
// for(let i of s.entries()){
//   console.log(i)
// }
//遍历方法
// s.forEach(function(item){
//   console.log(item)
// })
