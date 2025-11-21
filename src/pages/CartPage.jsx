import "../styles/CartPage.css";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearWarning } from "../utils/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const warning = useSelector((state) => state.cart.warningMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (warning) {
      alert(warning);
      dispatch(clearWarning());  // reset warning
    }
  }, [warning]);

  const [totalAmount, setTotalAmount] = useState()
  useEffect(() => {
    setTotalAmount(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))
  }, [cartItems])

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-items-list">
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{totalAmount}</h3>
          <Link to="/CheckOut">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
