import { useEffect, Fragment, useContext, useState } from "react";

import { useParams } from "react-router-dom";
import PorductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryContainer, CategoryTitle } from "./category.styles";

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
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <PorductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
}
