export default function slice(arr, begin, end) {
    var newArr = [];


    if(arr.length ===0){
        return newArr
    }

    begin = begin || 0;

    if(begin>=arr.length){
        return newArr
    }

    end = end || arr.length;

    if(end < begin){
        end = arr.length;
    }

    for(var  i = begin; i < end;i++){
        newArr.push(arr[i]);
    }
    return newArr
}