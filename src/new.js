/*
 * @Author: ziming
 * @Date: 2021-03-08 21:29:56
 * @LastEditors: ziming
 * @LastEditTime: 2021-03-08 21:40:48
 */

function newObj(){
    var fn = Array.prototype.shift.call(arguments);
    var obj = Object.create(fn.prototype); // 创建一个指定原型的对象
    var res = fn.apply(obj, [].slice.call(arguments,1));
    return typeof res === 'object' ? res || obj: obj;
}