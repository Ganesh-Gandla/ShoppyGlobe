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

  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
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
