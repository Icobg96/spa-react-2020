import React from 'react';

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Hello',
            counter: 0
        }
    }
    onClickChangeState = event =>{
        this.setState({counter : this.state.counter + 1});
    }
    render(){
        return <>
            <h1>{this.state.title + ' ' + this.state.counter}</h1>
            <h4>{this.props.subTitle}</h4>
            <p>{this.props.name}</p>
            <button type="button" className="btn btn-primary" onClick={this.onClickChangeState}>Change state</button>
        </>
    }
}
export default ClassComponent;