import React from 'react';
import { useProductContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const CartItem = ({ item }) => {

    const [state, dispatch] = useProductContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });

    };

    const onChange = (e) => {
        const value = e.target.value;
        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
            idbPromise('cart', 'delete', { ...item });

        } else {
            if (!value) {
                dispatch({
                    type: UPDATE_CART_QUANTITY,
                    _id: item._id,
                    purchaseQuantity: parseInt(0)
                });
                idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(0) });
            } else {
                dispatch({
                    type: UPDATE_CART_QUANTITY,
                    _id: item._id,
                    purchaseQuantity: parseInt(value)
                });
                idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
            };

        }
    }

    // console.log(state);

    return (
        <div className="flex-row">
            <div>
                <img
                    src='https://placehold.co/100x100'
                    alt=""
                />
            </div>
            <div>
                <div>{item.productName}, ${item.productPrice}/{item.productUnits}</div>
                <div>Subtotal: ${(item.productPrice * item.purchaseQuantity).toFixed(2)}</div>
                <div>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder=""
                        value={item.purchaseQuantity}
                        onChange={onChange}
                    />
                    <span
                        role="img"
                        aria-label="trash"
                        onClick={() => removeFromCart(item)}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;





//     return (
//         <div className="d-flex align-items-center justify-content-between my-3">
//             <div>
//                 <h5>{item.productName}</h5>
//                 <div className="input-group  input-group-sm mb-3">
//                     <button className="btn btn-outline-secondary" type="button" onClick={handleMinus}>-</button>
//                     <input type="number" className="form-control" placeholder={item.quantity} />
//                     <button className="btn btn-outline-secondary" type="button" onClick={handlePlus}>+</button>
//                 </div>
//                 <p className="text-muted">${(item.price * item.quantity).toFixed(2)}</p>
//             </div>
//             <div>
//                 <button className="btn btn-danger" type="button" onClick={handleRemove}>
//                     Remove
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CartItem;

