import React, { useContext, useState } from 'react';
import { CartContext } from '../utils/cartContext';
import CartItem from '../components/CartItems';

const Cart = () => {
    const [cartState] = useContext(CartContext);
    const [cartVisible, setCartVisible] = useState(false);

    const handleToggleCart = () => {
        setCartVisible(!cartVisible);
    };

    console.log(cartState);

    return (
        <div className="cart">
            <button className="btn btn-primary" onClick={handleToggleCart}>
                <i className="bi bi-cart"></i> Cart ({cartState.items.length})
            </button>
            {cartVisible && (
                <div>
                    {cartState.items.length > 0 ? (
                        <div>
                            {cartState.items.map(item => (
                                <CartItem key={item._id} item={item} />
                            ))}
                            <div className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <p>${cartState.total.toFixed(2)}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
