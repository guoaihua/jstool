export default function _find(arr,cb, context) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(cb.call(context,item, i)){
            return item
        }
    }
    return undefined;
}