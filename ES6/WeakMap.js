

let e1 = document.getElementById('div1');

let obj = {
  ab : el,
  ac : '123'
}

el = null;
//麻烦，如果忘了写就容易造成内存泄漏
//如果不手动的null，那么垃圾回收是不会回收的，
