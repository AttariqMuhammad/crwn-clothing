import { useEffect, Fragment, useContext, useState } from "react";

import { useParams } from "react-router-dom";
import PorductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

export default function Category() {
  //use category parameter from shop
  const { category } = useParams();
  //use caategories map context
  const { categoriesMap } = useContext(CategoriesContext);
  //set categoriesmap data to products state
  const [products, setProducts] = useState(categoriesMap[category]);

  //use effect if categoriesMap and category change =>set new setProduct
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <PorductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}
