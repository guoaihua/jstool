 // 通过一个基准值来将数组切分成3分，左边的数组比他小，右边的数组比他都大
 export default function quickSort(arr){
    // 基线条件为数组为空，或者长度为1 都是有序的
    if(arr.length < 2){
      return arr
    }
    
    var arrUnit = arr[0];
    
    var left = [],
        right = [];
    
    for(var i = 1; i < arr.length; i++){
      if( arr[i] < arrUnit){
        left.push(arr[i]);
      }else {
        right.push(arr[i]);
      }
    }    
    
    return quickSort(left).concat(arrUnit,quickSort(right))
    }