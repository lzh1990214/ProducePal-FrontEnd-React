import React, { useContext, useEffect, useState } from 'react';
import { useProductContext } from '../utils/GlobalState';
import {
    UPDATE_PRODUCTS, UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY, TOGGLE_VENDOR_STATUS
} from '../utils/actions';
import productData from '../utils/products';
import ProductSingle from '../components/ProductSingle';
import Cart from '../components/Cart';
import { idbPromise } from '../utils/helpers';
import UserToggle from '../components/UserToggle';


const ProductInventory = () => {

    const [state, dispatch] = useProductContext();
    // remember to bring in additional global states.
    const { currentCategory, categories, currentCategoryName, cart, vendorStatus } = state;

    // fetch products data and product categories data locally. and dispatch to STATE. need to be modified with database
    useEffect(() => {
        async function fetchData() {
            const data = productData.map(productData => productData);
            // extract unique category names from the product data
            const uniqueCategories = [...new Set(productData.map(productData => productData.productCategory))];
            // create a new category list with 'ALL' and unique category names
            const categoriesList = ['All', ...uniqueCategories];
            // convert array to an object to use reducer dispatch
            const categogiesListObject = categoriesList.map((item, index) => {
                return { _id: index, name: item };
            });
            console.log(categogiesListObject);
            // console.log(categoriesList);

            dispatch({ type: UPDATE_PRODUCTS, products: data });
            dispatch({ type: UPDATE_CATEGORIES, categories: categogiesListObject });
            data.forEach((product) => {
                idbPromise('products', 'put', product);
            });

        }
        fetchData();
    }, []);


    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
            currentCategoryName: categories[id].name
        });
    };

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        } else {
            return state.products.filter(
                // (product) => product.productCategory === currentCategory
                (product) => product.productCategory === categories[currentCategory].name
            );
        }
    }
    // console.log(categories);
    // console.log(cart.length);

    const toggleVendorStatus = () => {
        dispatch({ type: TOGGLE_VENDOR_STATUS });
    };

    console.log(vendorStatus);

    return (
        <div className="container my-2">
            <div className='row mb-3'>
                <UserToggle vendorStatus={vendorStatus} onToggle={toggleVendorStatus} />
            </div>
            <div className='row'>
                {vendorStatus ? <br /> : <Cart />}
            </div>
            {vendorStatus ? <h2>My Farm Products</h2> : <h2>Farm Products</h2>}

            {/* categories selection menu */}
            <div className="dropdown mb-3 text-end">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {currentCategoryName ? currentCategoryName : 'Select a category'}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {categories.map((item) => (
                        <li key={item._id}>
                            <a
                                // key={item._id}
                                className="dropdown-item"
                                onClick={() => { handleClick(item._id) }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* array of product cards */}
            {state.products.length ? (
                <div className="row is-flex">
                    {filterProducts().map((product) => (
                        <ProductSingle
                            key={product._id}
                            _id={product._id}
                            // image={product.image}
                            productName={product.productName}
                            productDescription={product.productDescription}
                            productCategory={product.productCategory}
                            productInventory={product.productInventory}
                            productPrice={product.productPrice}
                            productUnits={product.productUnits}
                            productType={product.productType}
                            productAvailability={product.productAvailability}
                        />
                    ))}
                </div>
            ) : (
                <h3>No products in this farm yet !</h3>
            )}


        </div>
        // console.log(state)

    );
};

export default ProductInventory;
