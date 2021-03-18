import routeConifg from './routeConifg';
import dva from 'dva';
import counterModel from './models/counter';
import studentsModel from './models/students';
import { createBrowserHistory } from 'history';
// import myDvaPlugin from './myDvaPlugin';
import createLoading from 'dva-loading';

//得到一个dva对象
//这里传入的history才是在仓库counter中监听的histoy
const app = dva({
  history: createBrowserHistory(),
});
app.use(createLoading());
// app.use(myDvaPlugin);
//在启动之前定义模型
app.model(counterModel);
app.model(studentsModel);

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(routeConifg);
app.start('#root');
// ReactDOM.render(<App />, document.getElementById('root'));
