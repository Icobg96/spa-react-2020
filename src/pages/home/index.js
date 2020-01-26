import React from 'react';
import {connect} from 'react-redux';
import QuantityInput from '../../components/quantityInput'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: [1, 2, 3, 4, 5],
            array: [
                {
                    key: 1,
                    description: 'asdasd asdas dasd '
                },
                {
                    key: 2,
                    description: 'ghjghjghdfert reter fdgd'
                },
                {
                    key: 3,
                    description: 'ertertreur etrter er tert wer we'
                }
            ]
        }
    }
    renderQuantityInputs = () => {
        const counts = this.state.counts;
        if (counts) {
            return counts.map((count) => {
                return <QuantityInput key={count} initialValue={count} step={count * 2} />
            });
        }
        return null;
    }
    changeState = () => {
        this.setState({
            counts: [7,2]
        })
    }
    renderList = () => {
        return this.state.array.map((item) => <li key={item.key} className="list-group-item">{item.description}</li>);
    }
    changeGlobalCount = () =>{
        this.props.setCounter(this.props.counter)
    }

    render() {
        return <div>
            <button className="btn btn-primary" type="button" onClick={this.changeState}> change array </button>
            <button className="btn btn-primary" type="button" onClick={this.changeGlobalCount}> increment counter </button>
            {this.renderQuantityInputs()}
            <ul className="list-group">
                {this.renderList()}
            </ul>
        </div>
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};
const setCount = count => {
    return {
        type: 'INCREMENT_COUNT',
        payload: count
    }
}
const mapStateToDispatch = dispatch => {
    return {
        setCounter: count => dispatch(setCount(count))
    }
};
export default connect(mapStateToProps,mapStateToDispatch)(Home); 