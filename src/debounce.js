/*
 * @Author: ziming
 * @Date: 2021-01-19 21:54:17
 * @LastEditors: ziming
 * @LastEditTime: 2021-01-19 23:04:14
 */

 function debounce(handler, delay){
    var clearId = null;
    return function(){
        if(clearId){
            clearTimeout(clearId);
        }
        clearId = setTimeout(()=>{
            handler.apply(this, arguments)
        },delay)
    }
 }