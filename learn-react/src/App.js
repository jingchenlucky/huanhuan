import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
// import {searchStudents} from './services/student';
export default function App() {
   // searchStudents({sex: -1, search: 1, page: 1, size: 10})
   //     .then(resp=>console.log(resp));
    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/" component={Admin} />
            </Switch>
        </Router>
    )
}
