import './page.css';
import React from 'react';
import {NavLink} from 'react-router-dom'

export function NavBar() {
    return (
        <div className="header">
            <NavLink to="/" >首页</NavLink>
            <NavLink to="/news" >新闻</NavLink>
            <NavLink to="/personal" >个人</NavLink>
        </div>
    )
}
export function Home() {
    return(
        <div className="home">首页</div>
    )
}

export function News() {
    return(
        <div className="news">新闻页</div>
    )
}

export function Personal() {
    return(
        <div className="personal">首页</div>
    )
}

