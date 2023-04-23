import React from "react";
// import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
import { useProductContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";


function ProductSingle(item) {
    const [state, dispatch] = useProductContext();

    const {
        // image,
        _id,
        productName,
        productDescription,
        productCategory,
        productInventory,
        productPrice,
        productUnits,
        productType,
        productAvailability,
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });

            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    // console.log(cart);

    return (
        <div key={_id} className="col-md-4 mb-4">
            <div className="card">
                <img src="https://placehold.co/600x300" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">{productDescription}</p>
                    <p className="card-text"><small>Category: {productCategory}</small></p>
                    <p className="card-text"><small>Inventory: {productInventory}</small></p>
                    <p className="card-text"><small>Price: ${productPrice} /{productUnits}</small></p>
                    <p className="card-text"><small>Type: {productType ? 'Weekly Farm Produce Box' : 'Produce'}</small></p>
                    <p className="card-text"><small>Availability: {productAvailability ? 'in-stock' : 'out-stock'}</small></p>
                    <div className="input-group input-group-sm mb-3">
                        <button className="btn btn-outline-secondary" type="button" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="card px-1 py-1">
        //     <Link to={`/products/${_id}`}>
        //         <img
        //             alt={name}
        //             src={`/images/${image}`}
        //         />
        //         <p>{name}</p>
        //     </Link>
        //     <div>
        //         <div>{quantity} {pluralize("item", quantity)} in stock</div>
        //         <span>${price}</span>
        //     </div>
        //     <button onClick={addToCart}>Add to cart</button>
        // </div>
    );
}

export default ProductSingle;

