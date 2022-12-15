import { useContext } from "react";
import { CatagoriesContext } from "../../contexts/catagories.context";
import { Route, Routes } from "react-router-dom";

import PorductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";

import CatagoriesPreview from "../../component/categories-preview/categories-preview.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CatagoriesPreview />} />
      {/* <Route path="" element={} /> */}
    </Routes>
  );
}
