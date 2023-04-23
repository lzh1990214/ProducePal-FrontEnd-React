import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const ProductContext = createContext();

const { Provider } = ProductContext;

const StoreProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
    currentCategoryName: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { StoreProvider, useProductContext };
