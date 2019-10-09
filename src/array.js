

function forEach(arr,callback) {
  const len = arr.length;
  for(let i = 0; i< len;i++){
    callback(arr[i],i,arr)
  }
}

function map(arr, callback) {
  const len = arr.length;
  const newarr = [];

  for(let i = 0;i < len;i++){
    newarr[i] = callback(arr[i],i,arr)
  }

  return newarr;
}



function filter(arr,callback) {
  const len = arr.length;
  const newarr = [];
  // callback 返回为true
  for (let i = 0;i < len; i++){
    if(callback(arr[i],i,arr)){

      // 用push 而不是将值保存在传入数组中放置的相同索引，防止空置
      newarr.push(arr[i]);

    }
  }

  return newarr
}


function reduce(arr, callback, initValue) {
  const len = arr.length;
  let sum = initValue || arr[0];
  let startIndex = initValue ? 0 : 1; // 初始值存在，sum值就是初始值了而不是第一个值

  // 初始值如果存在，避免重复计算，将初始值从1开始
  for (let i = startIndex;i < len; i++){
    sum = callback(sum, arr[i], i, arr);
  }

  return sum;
}


function findIndex(arr, callback) {
  const len = arr.length;

  for(let i = 0;i < len;i++){
    if(callback(arr[i], i, arr)){
      return i;
    }
  }

  return -1;
}


function indexOf(arr, value) {
  return findIndex(arr, function (item) {
    return item === value
  })
}

function every(arr,callback) {
  const len = arr.length;

  for (let i = 0; i < len; i++){
    if(!callback(arr[i], i , arr)){
      return false
    }
  }

  return true
}

function some(arr,callback) {
  const len = arr.length;

  for (let i = 0; i < len; i++){
    if(callback(arr[i], i , arr)){
      return false
    }
  }

  return true
}




