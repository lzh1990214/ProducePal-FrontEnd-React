// import React, { createContext, useReducer, useEffect } from 'react';

// export const CartContext = createContext();


// // initial cart state: an empty array and 0 items
// const initialState = {
//     items: [],
//     total: 0
// };

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_ITEM':
//             // Check if item is already in cart
//             const existingItemIndex = state.items.findIndex(item => item._id === action.payload._id);
//             if (existingItemIndex !== -1) {
//                 // Item already in cart, update quantity
//                 const updatedItems = [...state.items];
//                 // updatedItems[existingItemIndex].quantity += action.payload.quantity;
//                 updatedItems[existingItemIndex].quantity += 1;

//                 return {
//                     ...state,
//                     items: updatedItems,
//                     total: state.total + (action.payload.price * action.payload.quantity)
//                 };
//             } else {
//                 // Item not in cart, add to cart
//                 const newItems = [...state.items, action.payload];
//                 return {
//                     ...state,
//                     items: newItems,
//                     total: state.total + (action.payload.price * action.payload.quantity)
//                 };
//             }

//         case 'MINUS_ITEM':
//             // Check if item is already in cart
//             const minusItemIndex = state.items.findIndex(item => item._id === action.payload._id);
//             if (minusItemIndex !== -1) {
//                 // Item already in cart, update quantity
//                 const updatedItems = [...state.items];
//                 if (updatedItems[minusItemIndex].quantity > 1) {
//                     updatedItems[minusItemIndex].quantity -= 1;
//                     return {
//                         ...state,
//                         items: updatedItems,
//                         total: state.total - (action.payload.price * action.payload.quantity)
//                     }
//                 }
//             }


//         case 'REMOVE_ITEM':
//             const updatedItems = state.items.filter(item => item._id !== action.payload._id);
//             return {
//                 ...state,
//                 items: updatedItems,
//                 total: state.total - (action.payload.price * action.payload.quantity)
//             };

//         case 'CLEAR_CART':
//             return [];
//         default:
//             return state;
//     }
// };

// export const CartProvider = (props) => {
//     const [cartState, dispatch] = useReducer(cartReducer, initialState);

//     // Need to send the current pending order to database for persistency
//     // useEffect(() => {
//     //     const cartData = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
//     //     if (cartData) {
//     //         dispatch({ type: 'SET_CART', payload: cartData });
//     //     }
//     // }, []);

//     // useEffect(() => {
//     //     localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
//     // }, [cartState]);


//     return (
//         <CartContext.Provider value={[cartState, dispatch]}>
//             {props.children}
//         </CartContext.Provider>
//     );
// };
