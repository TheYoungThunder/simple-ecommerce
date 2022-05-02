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
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {product.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={product.featuredPhoto}
                alt="featured"
                className="featured-image"
              />
              <p className="product-info">
                (${product.price}) (⭐{product.rate}) ({product.reviewsCount}{" "}
                reviews){" "}
              </p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
