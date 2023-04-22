import React, { useContext } from 'react';
import { CartContext } from '../utils/cartContext';
import productData from '../utils/products';
import Cart from '../components/Cart';

const ProductInventory = () => {
    const [cartState, dispatch] = useContext(CartContext);

    const handleAddToCart = (product) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                _id: product._id,
                productName: product.productName,
                price: product.productPrice,
                quantity: 1
            }
        });
    };

    return (
        <div className="container">
            <Cart />
            <h1 className="text-center my-5">Farm Products Inventory</h1>
            <div className="row">
                {productData.map((product) => (
                    <div key={product._id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src="placeholder-image.jpg" className="card-img-top" alt="placeholder" />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">{product.productDescription}</p>
                                <p className="card-text"><small>Category: {product.productCategory}</small></p>
                                <p className="card-text"><small>Inventory: {product.productInventory}</small></p>
                                <p className="card-text"><small>Price: ${product.productPrice}</small></p>
                                <p className="card-text"><small>Type: {product.productType ? 'Weekly Farm Produce Box' : product.productType}</small></p>
                                <p className="card-text"><small>Units: {product.productUnits}</small></p>
                                <p className="card-text"><small>Availability: {product.productAvailability}</small></p>
                                <button className="btn btn-primary mt-3" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                <button className="btn btn-primary mt-3" onClick={() => handleAddToCart(product)}>Minus from Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductInventory;
