import { useContext } from "react";

import PorductCard from "../product-card/product-card.component";
import { CatagoriesContext } from "../../contexts/catagories.context";

export default function CatagoriesPreview() {
  //use contect cart context
  const { products } = useContext(CatagoriesContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <PorductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
