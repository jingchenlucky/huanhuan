export default {
  title: 'true',
  dva: {
    // immer: true,
    hmr: false,
  },
  // 配置代理
  proxy: {
    //相当于webpack中的devServer中的proxy配置
    '/api': {
      target: 'http://open.duyiedu.com',
      changeOrigin: true, //修改源
    },
  },
};
