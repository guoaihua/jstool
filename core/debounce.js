export default function debounce(fn, delay, immediately){
    var timeout = null;
    return function(){
        var self = this;
        var args = arguments;

        if(timeout !== null){
            clearTimeout(timeout);
        }

        timeout = setTimeout(function(){
                fn.apply(self, args);
                timeout = null;
            }, delay)
    }
}