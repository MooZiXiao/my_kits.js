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

/**
 * 
 * @description 读取存储在localStorage里的数据
 * @param {string} key 存储数据使用的键
 * @return {Array} 返回一个数组，若不存在，则返回空数组
 * 
 */
kits.loadData = function(key){
    let str = localStorage.getItem(key);
    let arr =JSON.parse(str);
    if(!arr){
        arr = [];
    }
    return arr;
}

/**
 * 
 * @description 用于将数组存储到localStorage里的方法
 * @param {string} key 存储使用的键
 * @param {Array} arr 要存储的数组数据
 * @return {undefined}
 * 
 */
function saveData(key,arr){
    var json = JSON.stringify(arr);
    localStorage.setItem(key, json);
  }
//测试
//再测试
