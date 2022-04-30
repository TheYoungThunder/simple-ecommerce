import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PaginatedItems from "../components/PaginatedItems";
import Product from "../components/Product";
import ProductsList from "../components/ProductsList";

export default function Gallery(props) {
  //   console.log(props.productList);
  return (
    <div>
      <NavBar></NavBar>
      <PaginatedItems
        productList={props.productList}
        handleClick={props.handleClick}
        itemsPerPage={2}
      ></PaginatedItems>
      {/* <ProductsList
        productList={props.productList}
        handleClick={props.handleClick}
      ></ProductsList> */}

      <Link to="cart">go to cart</Link>
    </div>
  );
}
