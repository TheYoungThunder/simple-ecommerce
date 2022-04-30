import React from "react";

export default function Product({ product, handleClick }) {
  return (
    <div
      className="product-container"
      onClick={(e) => handleClick(e, product.id)}
    >
      <p className="product-name">{product.name}</p>
      <img
        src={product.featuredPhoto}
        alt="featured"
        className="featured-image"
      />
      <button
        className="add-to-cart-button"
        onClick={(e) => handleClick(e, product.id)}
      >
        {" "}
        +{" "}
      </button>
      {/* <p className="product-description">{product.description}</p> */}
    </div>
  );
}
