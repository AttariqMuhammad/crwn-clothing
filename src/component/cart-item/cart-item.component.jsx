import { CartItemContainer, ItemDetails } from "./cart-item.styles";

export default function CartItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${imageUrl}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
