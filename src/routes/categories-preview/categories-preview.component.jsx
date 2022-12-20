import { Fragment, useContext } from "react";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import PorductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

export default function CategoriesPreview() {
  //use contect cart context
  const { categoriesMap } = useContext(CategoriesContext);
  const object = Object.keys(categoriesMap);
  console.log(object);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} products={products} />;
      })}
    </Fragment>
  );
}
