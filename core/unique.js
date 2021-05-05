export default function unique(arr) {
    var old = [];
    for(var i = 0,len = arr.length;i < len;i++){
        if(old.indexOf(arr[i]) === -1){
            old.push(arr[i])
        }
    }
    //  return [...new Set(arr)]
    return old
}