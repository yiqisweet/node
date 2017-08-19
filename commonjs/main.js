
console.log(require('./sub').count += 1);
console.log(require('./sub').count += 1);
console.log(require('./sub').count += 1);

Object.keys(require.cache).forEach(function(x){
    delete require.cache[x]
})
console.log(require('./sub').count += 1);
