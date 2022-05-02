import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <nav
        style={{
          padding: "1em",
          display: "flex",
          justifyContent: "flex-start",
        }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="navbar-brand">React economy</div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          className="nav-link"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            position: "relative",
          }}
          className="nav-link"
          to="/cart"
        >
          Cart
          <div className="item-counter">{props.noOfCartItems}</div>
        </Link>
      </nav>
    </>
  );
}
