import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import setActionCount from '../../redux/actions/counter'
const Profile = props => {
    const count = useSelector(state => state.counter)
    const title = useSelector(state => state.title)
    const dispatch = useDispatch();
    const setCount = count => dispatch(setActionCount(count));
    const increment = () => {
        setCount(count);
    }
    return <div>
        Profile
        <h1>{title}</h1>
        <button className="btn btn-primary" type="button" onClick={increment}> increment counter </button>
    <div>{count}</div>
    </div>
}
export default Profile;