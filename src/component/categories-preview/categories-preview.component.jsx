import { useContext } from "react";
import PorductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

export default function CategoriesPreview() {
  //use contect cart context
  const { categoriesMap } = useContext(CategoriesContext);
  const object = Object.keys(categoriesMap);
  console.log(object);

  return (
    <div className="products-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <div className="">{products}</div>;
      })}
    </div>
  );
}
