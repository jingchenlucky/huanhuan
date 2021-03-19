import React from 'react';

export default function Detail(props) {
  return (
    <div>
      <h2>{`匹配到的动态路由信息${props.match.params.id}`}</h2>
    </div>
  );
}
