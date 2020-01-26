import React from 'react';
import {connect} from 'react-redux'

class Profile extends React.Component{

    render(){
        return <div>
            Profile
            <div>{this.props.counter}</div>
        </div>
    }
}
export default connect(state => ({counter: state.counter}))(Profile);