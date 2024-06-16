import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductList = ({ products }) => {
  const { categoryName } = useParams();
  const categoryProducts = products[categoryName] || [];

  return (
    <div className="product-container">
      <h2 className="product-category">{categoryName}</h2>
      <div className="product-list">
        {categoryProducts.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
