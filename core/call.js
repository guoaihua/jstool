export default function _call(fn, context){
    var context = context;
    if(context === null || context === undefined){
        context = window;
    }
    context.fn = fn;
    var args = Array.prototype.slice.apply(arguments,[2]);
    var result = context.fn(...args);
    delete context.fn;
    return result;
}