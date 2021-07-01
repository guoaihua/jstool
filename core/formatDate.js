export default function formatDate(time, str){
    var date = {
      yyyy: time.getFullYear(),
      yy: time.getFullYear() % 100,
      MM: ("0" + (time.getMonth()+1)).slice(-2),
      M: time.getMonth()+1,
      dd: ("0" + (time.getDate())).slice(-2),
      d: time.getDate(),
      HH: ("0" + (time.getHours())).slice(-2),
      H: time.getHours(),
      hh: ("0" + time.getHours() % 12).slice(-2),
      h: time.getHours() % 12,
      mm: ("0" + time.getMinutes()).slice(-2),
      m: time.getMinutes(),
      ss: ("0" + time.getSeconds()).slice(-2),
      s: time.getSeconds(),
      w: ['日', '一', '二', '三', '四', '五', '六'][time.getDay()]
    }
    return str.replace(/([a-z]+)/ig, function($1){
      return date[$1]
    });
  }