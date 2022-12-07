import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./product-card.styles.scss";

export default function PorductCard({ product }) {
  const { name, price, imageUrl } = product;

  //use context cart context
  const { addItemtoCart, cartItems, setCartItems } = useContext(CartContext);

  // addProductToCart
  const addProductToCart = () => {
    addItemtoCart(product);
    console.log({ cartItems });
    console.log({ addItemtoCart });
    console.log({ product });
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name} </div>
        <div className="price">{price}</div>
      </div>
      <Button onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
}
