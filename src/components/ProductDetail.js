import userEvent from "@testing-library/user-event";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({products}) => {
    const {productId} = useParams();
    let product;
    console.log("Product ID:", productId);
    console.log("Product Details:", product);

    for(const category in products){
        product = products[category].find((prod) => 
        prod.id.toString() === productId);
        if(product) break;
    }

    if(!product){
        return <div>Product Not Found</div>;
    }
    
    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price:{product.price}</p>
        </div>
    )
};

export default ProductDetail;