
//一
// var set = new Set([1,2,3,4,5,6]);
// console.log(...set)


// var s = new Set();
//二
// [1,2,3,4,5].map(function(item){s.add(item)})

// console.log(...s)


// for(var i of s.entries()){
//     console.log(i)
// }
// console.log(s.size)


//三
// function divs(){
//     return [...document.querySelectorAll('div')]
// }
// var s = new Set(divs());

// console.log(...s)
// console.log(s.size)

//例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。

//数组去重
// var a = [1,2,3,4,5,1,2,3,4,5,'1'];
// var newArray = [...new Set((a))]
// console.log(newArray)

//在Set内部 NaN是相等的
//
// let s= new Set();
// s.add(NaN);
// s.add(NaN);
// console.log([...s])

//对象总是不相等的
// let s= new Set();
// s.add({});
// s.add({});
// console.log(...s)