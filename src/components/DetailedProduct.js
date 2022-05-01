import React from "react";
import { useParams } from "react-router-dom";

export default function DetailedProduct(props) {
  let params = useParams();
  const productList = props.productList;
  let product = productList.find((product) => {
    return product.id === params.productId;
  });

  return (
    <>
      <div className="product-container">
        <p className="product-name">{product.name}</p>
        <img
          src={product.featuredPhoto}
          alt="featured"
          className="featured-image"
        />
        <p className="product-info">
          (${product.price}) (⭐{product.rate}) ({product.reviewsCount} reviews){" "}
        </p>
        <p className="product-description">{product.description}</p>
      </div>
    </>
  );
}
