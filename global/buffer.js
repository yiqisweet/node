
//创建一个长度为10，且用0填充的Buffer
//alloc 分配
const buf1 = new Buffer.alloc(10);
console.log(buf1);


//创建一个长度为10  且用0x1填充的Buffer
const buf2 = new Buffer.alloc(10,1);
console.log(buf2);

//创建一个包含[0x1,0x2,0x3]的Buffer
const buf3 = new Buffer.from([1,2,3]);
console.log(buf3);
