import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../utils/cartSlice";

function CartPage() {
  const cartValue = useSelector((state)=>state.cart.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Cart Page</h2>
      <CartItem />
      <p>{cartValue}</p>
      <button onClick={()=>dispatch(increment())}>add</button>
      <button onClick={()=>dispatch(decrement())}>--</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <Link to={"/CheckOut"}><button>Check Out</button></Link>
      {/* Cart items will be displayed here */}
    </div>
  );
}
export default CartPage;