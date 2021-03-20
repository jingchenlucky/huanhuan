export default {
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      exact: false,
      routes: [
        {
          path: '/',
          component: './index',
          title: '首页',
          Routes: ["./src/routes/HandleTitle.js"]
        },
        { path: '/login', component: './login', title: '登录' },
        { path: '/welcome', component: './welcome', title: '欢迎' },
      ],
    },
  ],
};
