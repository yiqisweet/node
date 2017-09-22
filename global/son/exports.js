/**
 * Created by Administrator on 2017/9/22.
 */

/*
 exports 变量是在模块的文件级别作用域内有效的，它在模块被执行前被赋予 module.exports 的值。

 它有一个快捷方式，以便 module.exports.f = ... 可以被更简洁地写成 exports.f = ...。
 注意，就像任何变量，如果一个新的值被赋值给 exports，它就不再绑定到 module.exports：
 */
module.exports.hello = true; // 从对模块的引用中导出
exports = { hello: false };  // 不导出，只在模块内有效


//当 module.exports 属性被一个新的对象完全替代时，也会重新赋值 exports，例如：

module.exports = exports = function Constructor() {
    // ... 及其他
};