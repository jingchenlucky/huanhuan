import React from 'react';

export default class MyClassComp extends React.Component {
    // constructor(props){
    //     super(props);//this.props=props;
    //     console.log("===",this);
    //     console.log(props,this.props,props===this.props);
    // }
    render() {
        // console.log(this.props);
        if (this.props.obj) {
            return (
                <>
                    <p>{this.props.obj.name}</p>
                    <p>{this.props.obj.age}</p>
                </>
            )
        } else if (this.props.ui) {
            return (
                <div>
                    <p>下面是我传递的东西</p>
                    {this.props.ui}
                </div>
            )
        }
        return <h1>类组件内容,数字{this.props.a}</h1>
    }
}
