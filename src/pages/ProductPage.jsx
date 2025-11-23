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

      {/* LEFT SECTION */}
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

      {/* RIGHT SECTION */}
      <div className="pp-right">
        <h1 className="pp-title">{product.title}</h1>
        <p className="pp-brand">Brand: <b>{product.brand}</b></p>

        <div className="pp-price-box">
          <span className="pp-price">₹{product.price}</span>
          <span className="pp-discount">{product.discountPercentage}% OFF</span>
        </div>

        <p className="pp-rating">⭐ {product.rating} / 5</p>

        <p className="pp-status">
          Status: <b>{product.availabilityStatus}</b>
        </p>

        <p className="pp-description">{product.description}</p>

        {/* TAGS */}
        <div className="pp-tags">
          {product.tags?.map((tag, i) => (
            <span key={i} className="pp-tag">{tag}</span>
          ))}
        </div>

        {/* DETAILS SECTION */}
        <div className="pp-details">
          <p><b>Stock:</b> {product.stock}</p>
          <p><b>SKU:</b> {product.sku}</p>
          <p><b>Shipping:</b> {product.shippingInformation}</p>
          <p><b>Warranty:</b> {product.warrantyInformation}</p>
          <p><b>Return Policy:</b> {product.returnPolicy}</p>
        </div>

        {/* DIMENSIONS */}
        <div className="pp-dimensions">
          <h3>Dimensions</h3>
          <p>Width: {product.dimensions.width} cm</p>
          <p>Height: {product.dimensions.height} cm</p>
          <p>Depth: {product.dimensions.depth} cm</p>
        </div>

        {/* BUTTONS */}
        <div className="pp-buttons">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="pp-cart-btn"
          >
            Add to Cart
          </button>

          <button
            onClick={() => { 
              dispatch(addToCart(product)); 
              navigate("/checkout"); 
            }}
            className="pp-buy-btn"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
