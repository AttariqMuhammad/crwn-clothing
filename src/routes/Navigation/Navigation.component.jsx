import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../assets/firebase/firebase.utils";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import "./Navigation.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export default function Navigation() {
  //use context on USerCoontext
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  //use context cart context
  const { isCartOpen, cartCount } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <Link
              to="/authentication"
              className="nav-link"
              onClick={handleSignOut}
            >
              SIGN OUT
            </Link>
          ) : (
            <Link to="/authentication" className="nav-link">
              SIGN IN
            </Link>
          )}
          {currentUser ? <CartIcon /> : ""}

          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
