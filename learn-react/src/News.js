import React from 'react';
import {Link} from 'react-router-dom';

export default function News(props) {
    return (
        <div>
            <nav>
                <Link to="/news">新闻首页</Link>
                <Link to="/news/detail">新闻详情页</Link>
                <Link to="/news/search">新闻搜索页</Link>
            </nav>
            <div>
                {/* 匹配新闻页的子页面 */}
                {props.children}
            </div>
        </div>
    );
}
