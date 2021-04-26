
const toString = Object.prototype.toString;

const _isFunction = function(value){
    return typeof value === 'function'
}

const _isArray = function(value){
    if(Array.isArray){
        return Array.isArray(value)
    }

    return toString.call(value) === '[object Array]';
}

const _isObject = function(value){
    return toString.call(value) === '[object Object]';
}

const _isBoolean = function(value){
    return typeof value === 'boolean';
}

const _isDate = function(value){
    return toString.call(value) === '[object Date]';
}

const _isRegExp = function(value){
    return toString.call(value) === '[object RegExp]';
}

const _hasOwnPro =  function(object, value){
    return Object.prototype.hasOwnProperty.call(object, value);
}

export {
    _isFunction,
    _isArray,
    _isBoolean,
    _isDate,
    _isObject,
    _isRegExp,
    _hasOwnPro
}