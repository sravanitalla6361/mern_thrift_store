import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToBag } = useAppContext();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px", display: "flex", gap: "40px" }}>
      <img src={product.image} style={{ width: "400px" }} />

      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>

        <button onClick={() => addToBag(product)}>
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;