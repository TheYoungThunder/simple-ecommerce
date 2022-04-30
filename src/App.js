import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import db from "./db.json";
import { nanoid } from "nanoid";

function App() {
  const dbWithId = db.products.map((product) => {
    return { ...product, id: nanoid() };
  });
  const [productList, setProductList] = useState(dbWithId);
  const [cartList, setCartList] = useState([]);

  function handleClick(e, key) {
    e.stopPropagation();
    // console.log(e);
    const className = e.target.className;
    if (className === "featured-image") {
      console.log(key);
      console.log("this is an image");
    } else if (className === "add-to-cart-button") {
      console.log("this is a button");
      setCartList((prevCart) => {
        const product = productList.find((product) => {
          return product.id === key;
        });
        return [...prevCart, product];
      });
    }
    // console.log(key);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Gallery
              productList={productList}
              setProductList={setProductList}
              cartList={cartList}
              setCartList={setCartList}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="cart"
          element={<Cart cartList={cartList} setCartList={setCartList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
