import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useEffect, useState } from "react";
import "../styles/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data) {
      const found = data.find((item) => item.id == id);
      setProduct(found);
    }
  }, [data, id]);

  if (isLoading || !product) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-page">

      {/* LEFT: IMAGES */}
      <div className="product-images">
        <img
          src={product.images[0]}
          alt={product.title}
          className="main-image"
        />

        <div className="thumbnail-list">
          {product.images.map((img, i) => (
            <img key={i} src={img} alt="" className="thumbnail" />
          ))}
        </div>
      </div>

      {/* RIGHT: DETAILS */}
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-brand">Brand: {product.brand}</p>

        <p className="product-price">₹{product.price}</p>
        <p className="product-discount">
          Discount: {product.discountPercentage}%
        </p>

        <p className="product-stock">
          Status: <b>{product.availabilityStatus}</b>
        </p>

        <p className="product-description">{product.description}</p>

        <div className="btns">
          <button className="add-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
