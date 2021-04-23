
export default function throttle(fn, delay){
    let startTime = Date.now();
    return function(){
        let now = Date.now();
        if(now - startTime >delay){
            // 超过了限制，直接处理
            fn.apply(this, arguments);
            startTime = now;
        }
    }
}