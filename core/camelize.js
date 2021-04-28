import { _isArray, _has } from "../core/utils";



function resolveKey(input){
    return  input.replace(/(\S)(_([a-zA-Z]))/g, function(match, $1, $2, $3){
            return $1 + $3.toUpperCase();
    })
}

export default function camelizeKeys(input, convert){
    if(typeof input !== 'object' || input === null){
        return convert ? resolveKey(input) : input;
    }

    if(_isArray(input)){
        var temp = [];
        for(var i = 0; i < input.length; i++){
            temp.push(camelizeKeys(input[i]));
        }

    }else {
        var temp = {};
        for(var prop in input){
            if(_has(input, prop)){
                temp[camelizeKeys(prop, true)] = camelizeKeys(input[prop]);
            }
        }
    }
    return temp;
}
