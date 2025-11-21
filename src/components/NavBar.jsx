import { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const [open, setOpen] = useState(false);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <ul
        className={open ? "nav-links open" : "nav-links"}
        onClick={() => setOpen(!open)}
      >
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/"}><li>Products</li></Link>
        <Link to={"/About"}><li>About</li></Link>
        <Link to={"/Contact"}><li>Contact</li></Link>
      </ul>

      {/* Logo */}
      <h1 className="title">ShoppyGlobe</h1>

      {/* Cart icon with badge */}
      <Link to={"/CartPage"} className="cart-wrapper">
        <img src="./cart.png" alt="Cart" className="cart-icon" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </Link>
    </nav>
  );
}

export default NavBar;
