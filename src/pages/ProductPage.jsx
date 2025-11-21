import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useEffect, useState } from "react";
import "../styles/ProductPage.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (data?.products) {
      const found = data.products.find((item) => item.id == id);
      setProduct(found);
      setMainImage(found?.images[0]);
    }
  }, [data, id]);

  if (isLoading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!product) return <p className="error">Product not found.</p>;

  return (
    <div className="pp-container">

      {/* LEFT IMAGES */}
      <div className="pp-left">
        <img src={mainImage} alt={product.title} className="pp-main-img" />

        <div className="pp-thumbnails">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`pp-thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT DETAILS */}
      <div className="pp-right">
        <h1 className="pp-title">{product.title}</h1>
        <p className="pp-brand">Brand: <b>{product.brand}</b></p>

        <div className="pp-price-box">
          <span className="pp-price">₹{product.price}</span>
          <span className="pp-discount">{product.discountPercentage}% OFF</span>
        </div>

        <p className="pp-status">
          Status: <b>{product.availabilityStatus}</b>
        </p>

        <p className="pp-description">{product.description}</p>

        <div className="pp-buttons">
          <button onClick={() => dispatch(addToCart(product))} className="pp-cart-btn">Add to Cart</button>
          <button onClick={() => {
            dispatch(addToCart(product));
            navigate("/checkout");
          }} className="pp-buy-btn">Buy Now</button> 
        </div>
      </div>

    </div>
  );
}

export default ProductPage;
