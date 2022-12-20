import { Link } from "react-router-dom";
import PorductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <PorductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
