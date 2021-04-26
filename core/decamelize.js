import { _isArray, _hasOwnPro } from "../core/utils";
 
function resolveKey(input){
    return input.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export default function decamelizeKeys(obj, convert){
    if(typeof obj !== 'object' || obj === null){
        // 只转换keys
        return convert ?  resolveKey(obj) : obj 
    }

    if(_isArray(obj)){
        var temp = [];
        for (let i = 0; i < obj.length; i++) {
            temp.push(decamelizeKeys(obj[i]));
        }

    }else {
        var temp = {};
        for(var prop in obj){
            if(_hasOwnPro(obj, prop)){
                temp[decamelizeKeys(prop, true)] = decamelizeKeys(obj[prop]);
            }
        }
    }
    return temp;
}