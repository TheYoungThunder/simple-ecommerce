import React from "react";
import ProductsList from "../components/ProductsList";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <>
      {props.noOfCartItems ? (
        <ProductsList
          isInCart={true}
          currentItems={props.cartList}
          handleClick={props.handleClick}
        ></ProductsList>
      ) : (
        <NoItems />
      )}
    </>
  );
}

function NoItems() {
  return (
    <>
      <div
        className="no-items modal modal-tour position-static d-block bg-secondary py-5"
        tabindex="-1"
        role="dialog"
        id="modalTour"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-6 shadow">
            <div className="modal-body p-5">
              <h2 className="fw-bold mb-0">Empty Cart</h2>

              <ul className="d-grid gap-4 my-5 list-unstyled">
                <li className="d-flex gap-4">
                  <div>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      You have no items in your cart
                    </h2>
                  </div>
                </li>
              </ul>
              <Link
                to="/"
                className="btn btn-lg btn-primary mt-5 w-100"
                data-bs-dismiss="modal"
              >
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
