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

    const { cart, vendorStatus } = state

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
    // console.log(vendorStatus);

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
                        {vendorStatus
                            ? <button className="btn btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target={`#editProductModal-${_id}`}>Edit</button>
                            : <button className="btn btn-outline-secondary" type="button" onClick={addToCart}>Add to cart</button>}
                    </div>
                </div>
            </div>

            {/* <!-- Edit product Modal (enable in vendorStatus: true )--> */}
            <div className="modal modal-lg fade" id={`editProductModal-${_id}`} tabIndex="-1" aria-labelledby={`editProductModalLabel-${_id}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`editProductModalLabel-${_id}`}>{productName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Product name</label>
                                <input type="text" className="form-control text-muted" id={`product-name-input-${_id}`} defaultValue={productName} />
                            </div>
                            <div className="form-group">
                                <label>Product category</label>
                                <input type="text" className="form-control text-muted" id={`product-category-input-${_id}`} defaultValue={productCategory} />
                            </div>
                            <div className="form-group">
                                <label>Product Inventory</label>
                                <input type="text" className="form-control text-muted" id={`product-inventory-input-${_id}`} defaultValue={productInventory} />
                            </div>
                            <div className="form-group">
                                <label>Unit Price</label>
                                <input type="text" className="form-control text-muted" id={`product-price-input-${_id}`} defaultValue={`${productPrice}/${productUnits}`} />
                            </div>
                            <div className="form-group">
                                <label>Product Type</label>
                                <select className="form-select" aria-label="Default select example" id={`product-type-input-${_id}`}>
                                    <option value='true'>weekly box</option>
                                    <option value='false'>produce</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Availability</label>
                                <select className="form-select" aria-label="Default select example" id={`product-availability-input-${_id}`}>
                                    <option value='true'>In-stock</option>
                                    <option value='false'>Out-stock</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Add items</button>
                            <button type="button" className="btn btn-primary">Checkout</button>
                        </div>
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

