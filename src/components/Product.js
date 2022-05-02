import React from "react";

export default function Product({ product, handleClick, isInCart }) {
  const radius = "1em";
  return (
    <>
      <div
        className="card"
        data-kind="product-container"
        onClick={isInCart ? null : (e) => handleClick(e, product.id)}
        data-bs-toggle={isInCart ? null : "modal"}
        data-bs-target={isInCart ? null : "#exampleModal"}
        style={{
          margin: "2em",
          width: "24rem",
          borderRadius: radius,
        }}
      >
        <img
          src={product.featuredPhoto}
          alt="featured"
          className="card-img-top"
          data-kind="featured-image"
          style={{ borderTopLeftRadius: radius, borderTopRightRadius: radius }}
        />
        <div className="card-body" style={{ padding: "1.5em" }}>
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
                style={{ marginLeft: "1em" }}
              >
                Remove from Cart
              </button>
              <br />
              <div style={{ paddingTop: "0.7em" }}>
                You have {product.count} item(s) of this product
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
