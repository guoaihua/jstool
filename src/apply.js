/*
 * @Author: ziming
 * @Date: 2020-12-23 22:47:12
 * @LastEditors: ziming
 * @LastEditTime: 2021-03-01 23:06:25
 */

// 原理同call
Function.prototype.apply = function (context, arr) {

    var context = context || window;
    var res;

    context.fn = this;

    if(!arr) {
      res = context.fn();
    }else {

      // 保存args
      var args = [];
      for (var i = 0; i < arr.length; i++ ){
          args.push('arr[' + i + ']');
      }
      res = eval('context.fn(' + args + ')');
    }

    delete context.fn;

    return res;

}

Function.prototype.apply = function () {

  var context = arguments[0] || window;
  var res;
  context.fn = this;

  var res = arguments[1] ? context.fn(...arguments[1]) : context.fn();

  delete context.fn;

  return res;

}
