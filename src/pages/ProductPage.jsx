import { useParams } from "react-router-dom";

function ProductPage() {
  const {id} = useParams()
  return (
    <div>
      <h1>Product id: {id}</h1>
      {/* Product details and related components will go here */}
    </div>
  );
}
export default ProductPage;