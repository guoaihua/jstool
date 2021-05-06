export default function concat(arr) {
    var newArr = arr;
    var args = Array.prototype.slice.call(arguments, 1);
    for(let i = 0, len = args.length; i < len; i++){
       if(Array.isArray(args[i])){
            newArr.push(...args[i]);
       }else {
           newArr.push(args[i]);
       }
    }
    return  newArr
}