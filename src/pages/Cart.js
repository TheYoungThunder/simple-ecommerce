import React from "react";
import { Link } from "react-router-dom";
import ProductsList from "../components/ProductsList";

export default function Cart(props) {
  return (
    <div>
      {props.noOfCartItems ? (
        <ProductsList
          isInCart={true}
          currentItems={props.cartList}
          handleClick={props.handleClick}
        ></ProductsList>
      ) : (
        <h1>no items in the cart!!</h1>
      )}
    </div>
  );
}
