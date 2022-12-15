import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data.js";

import {
  addCollectionAndDocument,
  getCategoriesAndDocument,
} from "../assets/firebase/firebase.utils.js";

export const CatagoriesContext = createContext({
  products: [],
});
export const CatagoriesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // add data to firebase
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument("catagories");
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
