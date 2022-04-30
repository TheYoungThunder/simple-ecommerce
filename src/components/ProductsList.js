import React, { useState } from "react";
import Product from "./Product";

export default function ProductsList(props) {
  const products = props.productList; //Peeling off the products array
  const productsElements = products.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        handleClick={props.handleClick}
      ></Product>
    );
  });
  return <>{productsElements}</>;
}
