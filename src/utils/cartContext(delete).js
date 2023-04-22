// import React, { createContext, useReducer, useEffect } from 'react';
// import products from './products';

// export const CartContext = createContext();


// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'add':
//             return { ...state, [action._id]: (state[action._id] || 0) + 1 };
//         case 'minus':
//             return { ...state, [action._id]: (state[action._id] || !0) - 1 };
//         case 'remove':
//             const newState = { ...state };
//             delete newState[action._id];
//             return newState;
//         case 'update':
//             return { ...state, [action._id]: action.quantity };
//         case 'clear':
//             return {};
//         default:
//             return state;
//     }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, dispatch] = useReducer(cartReducer, {});

//     // Load cart data from localStorage
//     // useEffect(() => {
//     //     const storedCart = localStorage.getItem('cart');
//     //     if (storedCart) {
//     //         dispatch({ type: 'load', cart: JSON.parse(storedCart) });
//     //     }
//     // }, []);

//     // Save cart data to localStorage
//     // useEffect(() => {
//     //     localStorage.setItem('cart', JSON.stringify(cart));
//     // }, [cart]);


//     const addToCart = (_id) => {
//         dispatch({ type: 'add', _id });
//         getCartItemById(_id);
//         // console.log(cart);
//     };

//     const minusFromCart = (_id) => {
//         dispatch({ type: 'minus', _id });
//         getCartItemById(_id);
//         // console.log(cart);
//     };

//     const removeFromCart = (_id) => {
//         dispatch({ type: 'remove', _id });
//     };

//     const updateCart = (_id, quantity) => {
//         dispatch({ type: 'update', _id, quantity });
//     };

//     const clearCart = () => {
//         dispatch({ type: 'clear' });
//     };

//     const cartItemsCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);


//     const getCartItemById = (productId) => {
//         // const idToFind = 3;
//         const product = products.find(p => p._id === productId);
//         const quantity = cart[productId];
//         // console.log(_id);
//         // console.log(quantity);
//         // console.log(product);
//         return {
//             ...product,
//             quantity
//         };
//     };

//     const cartItems = Object.keys(cart).map(productId => getCartItemById(productId));

//     // console.log(cartItems);

//     const cartTotal = cartItems.reduce((total, item) => {
//         return total + (item.productPrice * item.quantity);
//     }, 0);

//     return (
//         <CartContext.Provider value={{ cart, addToCart, minusFromCart, removeFromCart, updateCart, clearCart, cartItemsCount, cartItems, cartTotal }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// // export { cart, addToCart, removeFromCart, updateCart, clearCart, cartItemsCount, cartItems, cartTotal };
