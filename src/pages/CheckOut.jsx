import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function CheckOut (){
    return(
        <div>
            <form action=""></form>
            <CartItem />
            <Link to={"/"}><button>Place Order</button></Link>
        </div>
    )
}
export default CheckOut;