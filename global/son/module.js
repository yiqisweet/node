/**
 * Created by Administrator on 2017/9/22.
 */


//模块完全解析后的文件名
console.log(module.filename);

//模块的标识符
console.log(module.id);

//模块是否已经加载完成，或正在加载中
console.log(module.loaded);

//最先引用该模块的模块
console.log(module.parent);

//模块的搜索路径顺序
console.log(module.paths);


//被该模块引用的模块对象
console.log(module.children)

