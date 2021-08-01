import React from 'react';
// import * as Pages from './Page';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import matchPath from './react-router/matchPath';

function App(props) {
  const result=  matchPath('/news/:year?/:month?/:day','/news/2021/08/20',{exact:true});
  console.log("========",result)
    return (
        <div>123231</div>
    );
}

export default App;
