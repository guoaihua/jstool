export default function chunk(arr, size) {
    var result = [];
    var temp = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(temp.length === 0){
            result.push(temp);
        }
        temp.push(item);
        if(temp.length === size){
            temp = [];
        }
    }
}