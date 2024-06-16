import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  let product;

  for (const category in products) {
    product = products[category].find((prod) => prod.id.toString() === productId);
    if (product) break;
  }

  if (!product) {
    return <div className="product-detail">Product Not Found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetail;
