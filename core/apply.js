export default function _apply(fn, context){
    var context = context;
    if(context === null || context === undefined){
        context = window;
    }
    var args = Array.from(arguments).slice(2);
    context.fn = fn;
    var res = args.length > 0 ?  context.fn(...args) : context.fn();
    delete context.fn;
    return res;
}