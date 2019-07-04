let kits = {};

//封装一个获取时间的方法
kits.formateDay = function () {
    //设置时间格式
    function addZero (t) {
        return t < 10 ? '0' + t : t;
    }
    
    let date = new Date();
    let y = date.getFullYear();
    let M = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    M = addZero(M);
    d = addZero(d);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}

// 封装一个可以获得随机区间的整数的方法
kits.randomInt=function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}

//封装一个简化获取元素 id 的方法
kits.getDID =function (id){
    return typeof(id) ? document.getElementById(id) : id;
}
//封装一个简化获取元素 className 的方法
kits.getDCN=function(cn){
    return typeof(cn) ? document.getElementsByClassName(cn) : cn;
}
//封装一个简化获取元素 querySeletor 的方法
kits.getDQS=function (qs){
    return typeof(qs) ? document.querySelector(qs) : qs;
}

//封装一个可以生成唯一id的方法
kits.primaryKey = function() {
    //获得当前时间
    let now = Date.now();
    //阻止1毫秒内生成多个id,从而加上个大范围的随机数
    let ran = kits.randomInt(100000,999999);

    return now + '' + ran;
}
//测试
//再测试
