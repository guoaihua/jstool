/*
 * @Author: ziming
 * @Date: 2021-01-19 22:12:42
 * @LastEditors: ziming
 * @LastEditTime: 2021-01-19 22:40:47
 */

 function throttle1(fn, delay){
    var pre = Date.now();
    return function(){
        var context = this;
        var now = Date.now();
        if(now - pre > delay){
            fn.apply(context, arguments);
            pre = Date.now();
        }
    }
 }


 function throttle2(fn, delay){
    var clearId = null;
    return function(){
        if(!clearId){
            clearId =  setTimeout(()=>{
                fn.apply(this,arguments);
                clearId = null;
            }, delay)
        }
    }
 }

 function throttle3(fn, delay){
    var clearId = null;
    var pre = Date.now();
    return function(){
        var now = Date.now();
        var remaining = delay - (now - pre);
        clearTimeout(clearId);
        if(remaining <= 0){
            fn.apply(this, arguments);
            pre = Date.now();
        }else {
            clearId = setTimeout(fn, remaining);
        }
    }
 }