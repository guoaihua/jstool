// input


  // Utilities
  // Taken from Underscore.js
  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };


function resolveKey(input){
    return  input.replace(/(\S)(_([a-zA-Z]))/g, function(match, $1, $2, $3){
            return $1 + $3.toUpperCase() || "";
    })
}

function camelizeKeys(input, convert){
    if(!_isObject(input) || _isDate(input) || _isRegExp(input) || _isBoolean(input) || _isFunction(input)){
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
            if(input.hasOwnProperty(prop)){
                temp[camelizeKeys(prop, true)] = camelizeKeys(input[prop]);
            }
        }
    }
    return temp;
}
