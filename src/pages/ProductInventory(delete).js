// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from '../utils/cartContext';
// import products from '../utils/products';


// const ProductInventory = () => {
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const { cart, addToCart, minusFromCart, cartItemsCount, removeFromCart, updateCart, clearCart } = useContext(CartContext);

//     const uniqueCategories = [...new Set(products.map(product => product.productCategory))];
//     const categories = ['All', ...uniqueCategories];

//     const handleCategorySelect = (category) => {
//         setSelectedCategory(category);
//     };

//     const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.productCategory === selectedCategory);

//     return (
//         <div className="container-fluid">
//             <div className="row mb-4">

//                 <div>
//                     {/* {Object.keys(cart)} */}
//                     {Object.entries(cart).map(([key, quantity]) => {
//                         const product = products.find(p => p._id === key);
//                         return (product);
//                     })}
//                 </div>


//                 {/* // dropdown */}
//                 <div className="col-sm-12 col-md-3">
//                     <div className="dropdown">
//                         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                             {selectedCategory}
//                         </button>
//                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                             {categories.map((category, index) => (
//                                 <li key={index + "list"}>
//                                     <a
//                                         key={index}
//                                         className="dropdown-item"
//                                         onClick={() => handleCategorySelect(category)}
//                                     >
//                                         {category}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-9 d-flex justify-content-end">
//                     <button
//                         type="button"
//                         className="btn btn-primary"
//                         data-toggle="modal"
//                         data-target="#cartModal"
//                     >
//                         Shopping Cart{' '}
//                         {cartItemsCount > 0 && (
//                             <span className="badge badge-pill badge-warning ml-2">
//                                 {cartItemsCount}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div>{Object.keys(cart).length === 0 ? (
//                     <p>Your cart is empty.</p>
//                 ) : (<p>Your cart is NOT empty.</p>)}</div>

//             </div>
//             <h1 className="text-center my-4">Farm Products</h1>
//             <div className="row row-cols-1 row-cols-md-3">
//                 {filteredProducts.map((product) => (
//                     <div className="col mb-4" key={product._id}>
//                         <div className="card h-100">
//                             <img
//                                 src="https://via.placeholder.com/350x150"
//                                 className="card-img-top"
//                                 alt="placeholder"
//                             />
//                             <div className="card-body">
//                                 <h5 className="card-title">{product.productName}</h5>
//                                 <p className="card-text">{product.productDescription}</p>
//                                 <p className="card-text">
//                                     Availability: {product.productInventory}
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <button
//                                         className="btn btn-danger btn-sm"
//                                         onClick={() => minusFromCart(product._id)}
//                                     >
//                                         <span className="minus-icon">&#8722;</span>
//                                     </button>
//                                     <span className="mx-1">
//                                         {cart[product._id] || 0}
//                                     </span>
//                                     <button
//                                         className="btn btn-success btn-sm"
//                                         onClick={() => addToCart(product._id)}
//                                     >
//                                         <span className="plus-icon">&#43;</span>
//                                     </button>
//                                     <div className="d-flex align-items-center">
//                                         <span className="mx-2">${product.productPrice}</span>
//                                         <span>{product.productUnits}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default ProductInventory;
