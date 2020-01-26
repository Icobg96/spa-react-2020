import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal : ''
        }
    }
    componentDidMount = () => {
        this.props.getMovies();
    }
    renderMovieList = () => {
        return this.props.movies.map((item) => <li key={item.id} className="list-group-item">{item.title + ' - ' + item.releaseYear}</li>);
    }
    changeTitle = () =>{
        this.props.changeTitle(this.state.inputVal);
    }
    onChange = event =>{
        this.setState({inputVal : event.target.value})
    }

    render() {
        return <div>
            <h1>{this.props.counter}</h1>
            <input type="text" className="form-control" onChange={this.onChange} value={this.state.inputVal}/>
            <button className="btn btn-primary" type="button" onClick={this.changeTitle}> change title </button>
            <ul className="list-group">
                {this.renderMovieList()}
            </ul>
        </div>
    }
}
function getMoviesGlobal() {
    return dispatch => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(
                    {
                        type: 'FETCHED_MOVIES',
                        payload: responseJson.movies
                    }
                )
            })
            .catch((error) => {
                console.error(error);
            });
    }

}
function changeGlobalTitle(title){
    return {
                type: 'SET_TITLE',
                payload: title
            }
}
const mapStateToProps = state => ({ movies: state.movies, counter: state.counter });
const mapStateToDispatch = dispatch => {
    return { getMovies: () => dispatch(getMoviesGlobal()),
        changeTitle: title => dispatch(changeGlobalTitle(title))}
};
export default connect(mapStateToProps, mapStateToDispatch)(Users);