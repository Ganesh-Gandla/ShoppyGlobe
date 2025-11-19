import "../styles/ProductList.css"
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";

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
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );

}
export default ProductList;