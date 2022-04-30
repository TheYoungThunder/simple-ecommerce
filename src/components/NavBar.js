import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <ul className="nav-bar">
        <li>Logo</li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </>
  );
}
