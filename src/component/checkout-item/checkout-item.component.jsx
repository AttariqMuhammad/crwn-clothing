import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  RemoveButton,
  Value,
  Arrow,
  Quantity,
  BaseSpan,
  ImageContainer,
  CheckoutItemContainer,
} from "./checkout-item.styles";

export default function CheckoutItem({ cartItem }) {
  const { name, quantity, price, imageUrl, clearCartItem } = cartItem;

  //use context cart context
  const { removeItemToCart, clearItemToCart, addItemtoCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemToCart(cartItem);
  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemtoCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${imageUrl}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
