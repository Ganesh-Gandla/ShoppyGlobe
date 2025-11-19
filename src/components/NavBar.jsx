import { useState } from "react";
import "../styles/NavBar.css";

import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/"}><li>Products</li></Link>
        <Link to={"/About"}><li>About</li></Link>
        <Link to={"/Contact"}><li>Contact</li></Link>
      </ul>

      <h1 className="title">ShoppyGlobe</h1>

      <Link to={"/CartPage"}><img src="cart-icon.png" alt="Cart" className="cart-icon" /></Link>
    </nav>
  );
}

export default NavBar;
