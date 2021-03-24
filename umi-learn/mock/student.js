import Mock from 'mockjs';
let result = Mock.mock({
  msg: '查询成功',
  status: 'sucess',
  'data|10': [
    {
      //随即生成10项的数组data
      name: '@cname',
      address: '@city',
      appkey: /demo\d{2}_\d{8}/, //demo + 2个数字 + _ + 8个数字
      'birth|1990-2000': 0, //1990-2000之间的一个数字
      'ctime|1554049417-1564049417': 0,
      email: '@email',
      'id|+1':1,//id自增
      iphone:/1\d{10}/,// 1开头+ 10位数字
      sNo:/\d{5}/,
      'sex|1':[0,1],//[0，1]之间随机选1位
      'utime|1554049417-1564049417': 0,
    },
  ],
});
console.log(result);
//导出的是数据模拟的配置
//该文件会被umijs读取
export default {
  'GET /api/student/findAll': {
    msg: '查询成功',
    status: 'success',
    data: result,
  },
};
