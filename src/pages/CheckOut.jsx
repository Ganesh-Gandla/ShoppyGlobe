import "../styles/CheckOut.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


function CheckOut() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    dispatch(clearCart())
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-grid">
        {/* USER DETAILS FORM */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h3>User Details</h3>

          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />

          <label>Email</label>
          <input type="email" placeholder="john@example.com" required />

          <label>Phone Number</label>
          <input type="text" placeholder="9876543210" required />

          <label>Address</label>
          <textarea placeholder="Street, City, Pincode" required />

          <button type="submit" className="order-btn">
            Place Order
          </button>
        </form>

        {/* CART SUMMARY */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>

          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <ul className="summary-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="summary-item">
                    <div>
                      <span className="item-title">{item.title}</span>
                      <div className="item-qty">
                        Qty: <strong>{item.quantity}</strong>
                      </div>
                    </div>
                    <strong>₹{item.price * item.quantity}</strong>
                  </li>
                ))}
              </ul>

              <div className="summary-total">
                <h4>Total Amount</h4>
                <p>₹{totalAmount}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
