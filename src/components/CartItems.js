import React, { useContext } from 'react';
import { CartContext } from '../utils/cartContext';


const CartItem = ({ item }) => {
    const [cartState, dispatch] = useContext(CartContext);
    // console.log(cartState);
    // console.log(item.quantity);

    const handleRemove = () => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    const handlePlus = () => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    }

    const handleMinus = () => {
        dispatch({ type: 'MINUS_ITEM', payload: item });
    }

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity > 1) {
            const updatedItem = { ...item, quantity: newQuantity };
            dispatch({ type: 'UPDATE_QUANTITY', payload: updatedItem });
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-between my-3">
            <div>
                <h5>{item.productName}</h5>
                <div className="input-group  input-group-sm mb-3">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleMinus}>-</button>
                    <input type="text" className="form-control" placeholder={`${item.quantity}`} onChange={handleQuantityChange} />
                    <button className="btn btn-outline-secondary" type="button" onClick={handlePlus}>+</button>

                </div>
                <p className="text-muted">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div>
                <button className="btn btn-danger" type="button" onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;

