/*
 * @Author: ziming
 * @Date: 2021-03-02 22:12:08
 * @LastEditors: ziming
 * @LastEditTime: 2021-03-02 22:37:49
 */
function curry(fn, args) {
    // 根据函数参数个数决定执行时机
    const len = fn.length;
    const _args = args || [];
    return function(){
        const args = Array.prototype.slice.call(arguments);
        // 拷贝之前的参数，一起保存
        const newArgs = _args.concat(args);
        if(newArgs.length < len){
            return curry(fn, newArgs);
        }else{
            // 足够执行fn，将所有参数传入
            return fn.apply(this, newArgs);
        }
    }
}