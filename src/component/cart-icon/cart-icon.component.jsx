import { useState, useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, Shopping, ItemCount } from "./cart-icon.styles.jsx";

export default function CartIcon() {
  //use context cart context
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Shopping></Shopping>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
