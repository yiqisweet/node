

//清楚require缓存
console.log(require('./modules').count);

Object.keys(require.cache).forEach(function(item){
  delete require.cache[item]
})

console.log(require('./modules').count);

//删除某一个require 的缓存，require.resolve 自动补全绝对路径
delete require.cache[require.resolve('./modules')]

console.log(require('./modules').count);
