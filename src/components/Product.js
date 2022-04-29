import React from "react";

export default function Product({ product }) {
  return (
    <div className="product-container">
      <p className="product-name">{product.name}</p>
      <img
        src={product.featuredPhoto}
        alt="featured"
        className="featured-image"
      />
      {/* <p className="product-description">{product.description}</p> */}
    </div>
  );
}
