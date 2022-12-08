import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, quantity, price, imageUrl, clearCartItem } = cartItem;

  //use context cart context
  const { removeItemToCart, clearItemToCart } = useContext(CartContext);

  const removeHandler = () => removeItemToCart(cartItem);
  const clearHandler = () => clearItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${imageUrl}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  );
}
