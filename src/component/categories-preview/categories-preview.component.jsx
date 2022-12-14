import { useContext } from "react";
import PorductCard from "../product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

export default function CategoriesPreview() {
  //use contect cart context
  const { products } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <PorductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
