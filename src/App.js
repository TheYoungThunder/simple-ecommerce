import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./db.json";
import { nanoid } from "nanoid";
import NavBar from "./components/NavBar";

function App() {
  const dbWithId = db.products.map((product) => {
    return { ...product, id: nanoid() };
  });
  const [productList, setProductList] = useState(dbWithId);
  const [cartList, setCartList] = useState([]);
  const [noOfCartItems, setNoOfCartItems] = useState(cartList.length);

  useEffect(() => {
    setNoOfCartItems(cartList.length);
  }, [cartList]);

  function handleClick(e, key) {
    e.stopPropagation();
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
    } else if (className === "remove-from-cart-button") {
      setCartList((prevCart) => {
        const removeButtonProducts = cartList.filter((product) => {
          return product.id !== key;
        });
        return removeButtonProducts;
      });
    }
  }

  return (
    <div className="App">
      <NavBar noOfCartItems={noOfCartItems}></NavBar>
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
          element={
            <Cart
              cartList={cartList}
              setCartList={setCartList}
              handleClick={handleClick}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
