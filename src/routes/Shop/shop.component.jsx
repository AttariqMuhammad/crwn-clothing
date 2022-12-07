import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";

import PorductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";

export default function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <PorductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
