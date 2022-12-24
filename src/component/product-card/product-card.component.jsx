import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

export default function PorductCard({ product }) {
  const { name, price, imageUrl } = product;

  //use context cart context
  const { addItemtoCart, cartItems, setCartItems } = useContext(CartContext);

  // addProductToCart
  const addProductToCart = () => {
    addItemtoCart(product);
    // console.log({ cartItems });
    // console.log({ addItemtoCart });
    // console.log({ product });
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name} </Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}
