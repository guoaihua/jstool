export default function reduce(arr, cb, inititalvalue){
    var i = 0;
    var sum = inititalvalue;


    if(sum === undefined){
        sum = arr[0];
        i++;
    }

    for (i; i < arr.length; i++) {
        sum= cb(sum,arr[i],i,arr);
    }
    return sum;
}