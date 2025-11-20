import "../styles/CartItem.css";
import { useDispatch } from "react-redux";
import {removeFromCart, increaseQuantity, decreaseQuantity} from "../utils/cartSlice"

function CartItem({ item }) {
  const dispatch = useDispatch();


    return (
      <div className="cart-item">

        <img src={item.thumbnail} alt={item.title} className="cart-img" />

        <div className="cart-info">
          <h3 className="cart-title">{item.title}</h3>
          <p className="cart-price">₹{item.price}</p>

          <div className="cart-quantity">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>

          <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>

      </div>
    );
  }

export default CartItem;
