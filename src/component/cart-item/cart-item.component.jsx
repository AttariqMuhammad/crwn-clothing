import "./cart-item.styles.scss";

export default function CartItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${imageUrl}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}