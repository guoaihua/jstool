/*
 * @Author: ziming
 * @Date: 2020-12-23 22:47:12
 * @LastEditors: ziming
 * @LastEditTime: 2021-03-01 22:22:46
 */
/*
 * 首先将要调用的方法（this）赋值给 传入对象的一个属性
 * 调用这个对象属性的方法
 * 删除这个对象上的属性
 */
Function.prototype.call = function (context) {
    // 如果为null或者不传，则这个对象默认为window
    var context = context || window;

    // 将要调用的方法绑定到target 对象的属性上
    context.fn = this;

    //保存参数为arguments[1]...格式
    var args = [];
    for (var i = 1; i< arguments.length;i++){
        args.push('arguments[' + i + ']');
    }
    var res = eval('context.fn(' + args + ')');
    delete context.fn;
    return res;
}

Function.prototype.call = function () {
    // 如果为null或者不传，则这个对象默认为window
    var context = arguments[0] || window;

    // 将要调用的方法绑定到target 对象的属性上
    context.fn = this;

    //保存参数为arguments[1]...格式
    var args = Array.from(arguments).slice(1);

    var res = args.length > 1 ? context.fn(...args) : context.fn();
    
    delete context.fn;
    return res;
}