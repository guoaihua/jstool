export default function eventProxy(el, type, cb, selector) {
    if(typeof el === 'string'){
        el = document.querySelector(el);
    }

    if(!selector){
        el.addEventListener(type, cb);
    }else {
        //有target则需要注意事件源
        el.addEventListener(type, function(e) {
            var target = e.target;
            if(target.matches(selector)){
                cb.call(target, e);
            }
        })
    }

}