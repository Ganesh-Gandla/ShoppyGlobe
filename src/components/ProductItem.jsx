import "../styles/ProductItem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";   // <-- import here

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="pi-card">

      <Link to={`/products/${product.id}`} className="pi-link">
        <div className="pi-image-wrapper">
          <LazyImage
            src={product.thumbnail}
            alt={product.title}
            className="pi-image"
          />
        </div>

        {/* Group 1: Title + Brand */}
        <h3 className="pi-title">{product.title}</h3>
        <p className="pi-brand">{product.brand}</p>
      </Link>

      {/* Group 2: Price + Discount */}
      <div className="pi-price-row">
        <span className="pi-price">₹{product.price}</span>
        <span className="pi-discount">{product.discountPercentage}% OFF</span>
      </div>

      {/* Group 3: Rating + Tag */}
      <div className="pi-meta-row">
        <p className="pi-rating">⭐ {product.rating}</p>
        <p className="pi-category">{product.category}</p>
      </div>

      {/* Group 4: Add to Cart */}
      <button
        className="pi-cart-btn"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addToCart(product));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
