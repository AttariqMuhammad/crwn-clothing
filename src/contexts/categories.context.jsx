import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data.js";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocument,
} from "../assets/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  products: [],
});
export const CategoriesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      // setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
