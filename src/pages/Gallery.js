import React from "react";
import { Outlet } from "react-router-dom";
import PaginatedItems from "../components/PaginatedItems";

export default function Gallery(props) {
  //   console.log(props.productList);
  return (
    <div className="gallery">
      <PaginatedItems
        productList={props.productList}
        handleClick={props.handleClick}
        itemsPerPage={2}
      ></PaginatedItems>
      <Outlet></Outlet>
      {/* the OUTLET thing is added for detailed product view */}
    </div>
  );
}
