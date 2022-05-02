import React from "react";

export default function Product({ product, handleClick, isInCart }) {
  return (
    <div
      className="product-container"
      onClick={isInCart ? null : (e) => handleClick(e, product.id)} //I added a conditional here to prevent showing detailed view when in cart
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
      {isInCart && (
        <>
          <button
            className="remove-from-cart-button"
            onClick={(e) => handleClick(e, product.id)}
          >
            {" "}
            -{" "}
          </button>
          <span>{product.count} items</span>
        </>
      )}

      {/* <p className="product-description">{product.description}</p> */}
    </div>
  );
}
