import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data.js";

import { addCollectionAndDocument } from "../assets/firebase/firebase.utils.js";

export const CatagoriesContext = createContext({
  products: [],
});
export const CatagoriesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocument("caragories", SHOP_DATA);
  // }, []);
  const value = { products };

  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
