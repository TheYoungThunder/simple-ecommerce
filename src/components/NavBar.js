import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <ul className="nav-bar">
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
          {" " + props.noOfCartItems}
        </li>
      </ul>
    </>
  );
}
