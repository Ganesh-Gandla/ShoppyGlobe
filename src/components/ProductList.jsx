import "../styles/ProductList.css";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../utils/searchSlice";

function ProductList() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  const [products, setProducts] = useState([]);

  const { data, error, isLoading, refetch } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>

      {/* search bar */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>

      {/* Loading */}
      {isLoading && <p className="info-message">Loading products...</p>}

      {/* Error handling */}
      {error && (
        <div className="error-box">
          <p className="error-text"> Failed to load products: {error}</p>

          <button className="retry-btn" onClick={refetch}>
            Retry
          </button>
        </div>
      )}

      {/* If no products available */}
      {!isLoading && !error && filteredProducts.length === 0 && (
        <p className="info-message no-results">
          No products found matching your search.
        </p>
      )}

      {/* Products Grid */}
      {!isLoading && !error && (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
