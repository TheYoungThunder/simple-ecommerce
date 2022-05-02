import React from "react";

export default function Product({ product, handleClick, isInCart }) {
  return (
    <>
      <div
        className="card"
        data-kind="product-container"
        onClick={isInCart ? null : (e) => handleClick(e, product.id)}
        style={{ width: "18rem" }}
      >
        <img
          src={product.featuredPhoto}
          alt="featured"
          className="card-img-top"
          data-kind="featured-image"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <button
            className="btn btn-primary"
            data-kind="add-to-cart-button"
            onClick={(e) => handleClick(e, product.id)}
          >
            Add to Cart
          </button>
          {isInCart && (
            <>
              <button
                className="btn btn-secondary"
                data-kind="remove-from-cart-button"
                onClick={(e) => handleClick(e, product.id)}
              >
                Remove from Cart
              </button>
              <span>{product.count} items</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
