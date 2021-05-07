// export default function deepclone1(obj) {
//     var data = JSON.stringify(obj);
//     return JSON.parse(data)
// }

//递归实现,使用map缓存遍历过的值
export default function deepclone(obj, map = new Map()) {
    if(typeof obj !== "object" || obj === null){
        return obj
    }

    let cache = map.get(obj);

    if(cache){
        return cache;
    }

    var _isArray = Array.isArray(obj);
    var temp = _isArray ? [] : {};

    map.set(obj,temp);
    if(_isArray){
        for (let i = 0; i < obj.length; i++) {
            const item = obj[i];
            temp[i] = deepclone(item, map);
        }
    } else {
        // for in 性能较低

        // for (const prop in obj) {
        //     if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        //         temp[prop] = deepclone(obj[prop], map);
        //     }
        // }

        Object.keys(obj).forEach(i => {
                temp[i] = deepclone(obj[i], map);
        })
    }
    return temp
}