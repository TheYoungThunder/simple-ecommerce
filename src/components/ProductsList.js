import React, { useState } from "react";
import Product from "./Product";
import { nanoid } from "nanoid";

export default function ProductsList(props) {
  const products = props.productList.products; //Peeling off the products array
  const productsElements = products.map((product) => {
    return <Product key={nanoid()} product={product}></Product>;
  });
  return <>{productsElements}</>;
}
