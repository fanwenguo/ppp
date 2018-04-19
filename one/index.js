
// const fn = function(a,...rest){
//     console.log(rest);
// }
// fn(1,2,3);
// let fun = (name='zhang')=>{
//     console.log(name);
// }
// fun();
// let a=5;
// const b=3;
// function aa(name='zhangsan'){
//     var name=2;
//     console.log(name);
// }
// aa('');   
// var obj = {a:1};
// var obj1 = {};
// Object.assign(obj1,obj);
//console.log(obj1);
//console.log(obj1 == obj);
//深拷贝
// var cloneObj = function(obj){
//     var str, newobj = obj.constructor === Array ? [] : {};
//     if(typeof obj !== 'object'){
//         return;
//     } else if(window.JSON){
//         str = JSON.stringify(obj), //系列化对象
//         newobj = JSON.parse(str); //还原
//     } else {
//         for(var i in obj){
//             newobj[i] = typeof obj[i] === 'object' ? 
//             cloneObj(obj[i]) : obj[i]; 
//         }
//     }
//     return newobj;
// };
// var obj = {
//     a:1,
//     b:2
// }
// var obj1 = {a:2};
// Object.assign(obj1,obj);
// console.log(obj1);
// var obj = {
//         a:1,
//         b:2
// }
// var obj1 = {c:2};
// var obj2 = {};
// function assigns(newobj,...oldobj){
//     oldobj.forEach((i)=>{
//         for(var j in i){
//             newobj[j]=i[j];
//         }
//     })
//     return newobj;
// }
// assigns(obj2,obj1,obj);
// console.log(obj2);
var b=1;

  function fn(){
  
    let a=1
  
    return function(){
 
       console.log(b) 
  
    } 
  
}
  
fn()()

