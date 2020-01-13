export default {
    methods: {
      /** 格式化时间戳 */
      MixinUnixToDate(timeStamp) {
        let date = new Date();
        date.setTime(timeStamp);  // 精确到毫秒、如果没有到毫秒就 date.setTime(timeStamp*1000);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute = date.getMinutes();
        let second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
      },
      /**
       * 计算传秒数的倒计时【天、时、分、秒】
       * @param seconds
       * @returns {{day : *, hours : *, minutes : *, seconds : *}}
       */
      countTimeDown(date1) {
        var time = '';
        var date2 = new Date();    //当前系统时间
        var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数
        var hours = Math.floor(date3 / (3600 * 1000)); //相差小时
        if (hours > 0) {
          time = hours + '小时前更新'
          if (hours > 24) {//如果小时大于24，计算出天和小时
            var day = parseInt(hours / 24);
            hours %= 24;//算出有多分钟
            time = day + '天' + hours + '小时前更新'
          }
        } else {
          //计算相差分钟数
          var leave2 = date3 % (3600 * 1000);      //计算小时数后剩余的毫秒数
          var minutes = Math.floor(leave2 / (60 * 1000));
          if (minutes > 0) {
            time = minutes + '分钟前更新';
          } else {
            time = '刚刚更新';
          }
        }
        return time;
      },
   
    }
  }
