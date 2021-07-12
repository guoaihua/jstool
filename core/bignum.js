export default function bigNumAdd(a,b) {
    var a = '' + a;
    var b = '' + b;

    // 获取最大值
    let maxLen = Math.max(a.length, b.length);
    // 用0填充
    a = a.padStart(maxLen, 0);
    b = b.padStart(maxLen, 0);

    let sum = '';
    let f = 0; //进位

    for(var i = maxLen - 1; i >=0; i--){
        var now = parseInt(a[i], 10) + parseInt(b[i], 10) + f;
        f = Math.floor(now/10); // 下一位
        sum = now % 10 + sum;
    }

    if(f === 1){
        sum = '1' + sum; // 只可能进一位
    }

    return sum

 }