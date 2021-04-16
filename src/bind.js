/*
 * @Author: ziming
 * @Date: 2020-12-23 22:49:29
 * @LastEditors: ziming
 * @LastEditTime: 2021-02-25 23:06:09
 */

// 绑定this
// 传递参数
// 通过new 创建时，this失效，参数有效
Function.prototype.bind = function(ctx){
    const self = this;
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
      }
    //保留参数
    const params = Array.prototype.slice.call(arguments, 1);
    function func(){
        const args = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof func ? this : ctx, params.concat(args));
    }
    func.prototype = Object.create(self.prototype);
    return func
}
