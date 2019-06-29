// 封装一个可以获得随机区间的整数的函数
function randomInt(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  }


//封装一个简化获取元素 id 的函数
function getQuery(id){
    return typeof(id) ? document.getElementById(id) : id;
}
//封装一个简化获取元素 className 的函数
function getQuery(cn){
    return typeof(cn) ? document.querySelector(cn) : cn;
}
//封装一个简化获取元素 querySeletor 的函数
function getQuery(qs){
    return typeof(qs) ? document.querySelector(qs) : qs;
}

//测试
//再测试
