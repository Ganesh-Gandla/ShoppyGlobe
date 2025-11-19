import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div>
      <h2>Cart Page</h2>
      <CartItem />
      <Link to={"/CheckOut"}><button>Check Out</button></Link>
      {/* Cart items will be displayed here */}
    </div>
  );
}
export default CartPage;