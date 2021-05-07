export default function flat(arr) {
    if(!Array.isArray(arr)){
        return arr
    }
    var temp = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // 递归核心是使用concat链接，天然平坦化一层，不要使用push
        temp =  temp.concat(flat(item));
    }
    return temp;
}


export  function flat2(arr) {
    return Array.prototype.flat.call(arr, Infinity);
}

export  function flat3(arr) {
    return arr.toString().split(",").map(i=>parseInt(i,10))
}


export  function flat4(arr) {
    while(arr.some(i => Array.isArray(i))){
        arr = [].concat(...arr);
    }
    return arr
}

