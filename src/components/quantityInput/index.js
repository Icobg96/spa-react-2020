import React,{ useState } from 'react';

const QuantityInput = props => {
    const [quantity, setQuantity] = useState(props.initialValue);
    const decrement = () => {
        setQuantity(quantity - props.step);
    }
    const increment = () => {
        setQuantity(quantity + props.step);
    }
    const renderAlert = count =>{
        if(count > 7){
            return <div class="alert alert-success" role="alert">Number is ok :)</div>
        }
        if(count < 3){
            return <div class="alert alert-danger" role="alert">Number is not ok!</div>
        }
        return <div class="alert alert-info" role="alert">Number is almost ok :(</div>
    }
    return (
        <div>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <button 
                    onClick={decrement}
                    className="btn btn-success" 
                    type="button">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                </div>
                <input type="text"
                    readOnly
                    className="form-control text-center"
                    value={quantity}
                />
                <div className="input-group-append">
                    <button 
                    onClick={increment}
                    className="btn btn-success"
                    type="button">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                </div>
            </div>
            {renderAlert(quantity)}
        </div>
    )
}
export default QuantityInput;