import { useContext } from "react";
import { CatagoriesContext } from "../../contexts/categories.context";
import { Route, Routes } from "react-router-dom";

import PorductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";
import CategoriesPreview from "../../component/categories-preview/categories-preview.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* <Route path="" element={} /> */}
    </Routes>
  );
}
