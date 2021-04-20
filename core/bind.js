export default function _bind(fn, context){
    var args = Array.prototype.slice.apply(arguments).slice(2);
    function fun(){
        var _args = Array.prototype.slice.apply(arguments);
        // 判断一下this示例是否指向 fun， 如果是则说明是通过new创建，需要忽略自身传进的context
        return fn.apply(this instanceof fun ? this : context, args.concat(_args));
    }

    // 新创建的函数继承与传入的函数
    fun.prototype = Object.create(fn.prototype);
    return fun
}