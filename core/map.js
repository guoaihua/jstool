export default function _map(arr, cb, context){
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // 索引对应的有值才会被调用
        if(item){
            newarr.push(cb.call(context,item, i, arr));
        }
    }
    return newarr;
}