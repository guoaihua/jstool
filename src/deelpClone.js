
// JSON.stringify 
// 待解决问题：
// 递归爆栈
// 循环引用
function deepClone(obj){
    if(obj !== "object" && obj !== null){
        return obj
    }
    var tempobj = null;
    if(obj.constructor === Array){
        tempobj = [];
        for(var i = 0 ; i < obj.length; i++){
            tempobj.push(deepClone(obj[i]));
        }
    }else {
        tempobj = {};
        for(var prop in obj){
            tempobj[prop] = deepClone(obj[prop]);
        }
    }
    return tempobj;
}