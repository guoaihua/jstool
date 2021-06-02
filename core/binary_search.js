  // 二分查找
  export default function binarySearch(list, target){
    var low = 0;
    var high = list.length -1;
    while(low <= high){
      // 中间数
      var mid = Math.floor((low + high) / 2);
      
      // 获取中间数
      var guess = list[mid];
  
      if(guess < target){
        // low 太小,mid位置的数已经比目标数小了，下次也没必要从mid开始
        low = mid + 1;
      }else if(guess > target){
        high = mid - 1;
      }else {
        return mid;
      }
    }
   }