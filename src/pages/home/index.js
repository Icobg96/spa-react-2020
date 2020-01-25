import React from 'react';
import QuantityInput from '../../components/quantityInput'

class Home extends React.Component{

    render(){
        return <div>
            <QuantityInput initialValue={1} step={1}/>
            <QuantityInput initialValue={2} step={2}/>
        </div>
    }
}
export default Home;