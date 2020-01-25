import React,{ useState } from 'react';

const QuantityInput = props => {
    const [quantity, setQuantity] = useState(props.initialValue);
    const decrement = () => {
        setQuantity(quantity - props.step);
    }
    const increment = () => {
        setQuantity(quantity + props.step);
    }
    return (
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

    )
}
export default QuantityInput;