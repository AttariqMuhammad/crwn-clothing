import { useContext } from "react";
import { CatagoriesContext } from "../../contexts/categories.context";
import { Route, Routes } from "react-router-dom";

import PorductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
