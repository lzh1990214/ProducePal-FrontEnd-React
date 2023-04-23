import React from "react";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import VendorInfo from "./components/VendorInfo";
import ProductInventory from "./pages/ProductInventory";
// import { CartProvider } from './utils/cartContext';
import { ProductProvider } from './utils/GlobalState';


// const App = () => <Home />;
// const App = () => <Dashboard />;
// const App = () => <Profile />;
// const App = () => <VendorInfo />;
// const App = () => {
//     return (
//         <CartProvider>
//             <ProductInventory />
//         </CartProvider>
//     );
// };
const App = () => {
    return (
        <ProductProvider>
            <ProductInventory />
        </ProductProvider>
    );
};



export default App;
