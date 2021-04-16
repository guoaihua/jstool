function new2(fn){
    var obj = Object.create(fn.prototype);
    var args = [].slice.call(arguments, 1);
    var obj1 = fn.apply(obj, args);
    return obj1 instanceof fn ? obj1 : obj;
}