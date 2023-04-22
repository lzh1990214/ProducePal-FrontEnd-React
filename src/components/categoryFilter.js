// import React, { useContext, useState, } from 'react';
// import { useProductContext } from '../utils/ProductContext';
// import {
//     UPDATE_CATEGORIES,
//     UPDATE_CURRENT_CATEGORY,
// } from '../../utils/actions';
// // need to be replaced by data in the database
// import products from '../utils/products';


// export const categoryFilter = () => {

//     const [state, dispatch] = useProductContext();
//     const { categories } = state;

//     const uniqueCategories = [...new Set(products.map(product => product.productCategory))];
//     // const categories = ['All', ...uniqueCategories];


//     return (
//         <div className="col-sm-12 col-md-3">

//             {/* // dropdown */}
//             <div className="dropdown">
//                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                     {selectedCategory}
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                     {categories.map((category, index) => (
//                         <li key={index + "list"}>
//                             <a
//                                 key={index}
//                                 className="dropdown-item"
//                                 onClick={() => handleClick(category)}
//                             >
//                                 {category}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// };