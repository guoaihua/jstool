export default function _filter(arr, cb, context) {
    var resolveArr = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(cb.call(context,item,i)){
            resolveArr.push(item)
        }
    }

    return resolveArr;
}