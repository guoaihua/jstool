
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
