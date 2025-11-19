import "../styles/ProductItem.css"

function ProductItem({ product }) {
  return (
    <div className="product-card">
      {/* Product Image */}
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="product-image" 
      />

      {/* Title */}
      <h3 className="product-title">{product.title}</h3>

      {/* Brand */}
      <p className="product-brand">{product.brand}</p>

      {/* Price Section */}
      <div className="product-price-section">
        <span className="product-price">₹ {product.price}</span>
        <span className="product-discount">-{product.discountPercentage}%</span>
      </div>

      {/* Rating */}
      <p className="product-rating">⭐ {product.rating}</p>

      {/* Stock */}
      <p className="product-stock">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      {/* Category */}
      <p className="product-category">{product.category}</p>

      {/* Add to Cart */}
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
