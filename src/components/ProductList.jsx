import "../styles/ProductList.css"
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";

function ProductList() {

  const [products, setProducts] = useState([])

  const { data, error, isLoading } = useFetch("https://dummyjson.com/products")

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data])



  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}><ProductItem key={product.id} product={product} /></Link>
          ))}
        </div>
      )}
    </div>
  );

}
export default ProductList;