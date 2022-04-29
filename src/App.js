import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import db from "./db.json";

function App() {
  const [productList, setProductList] = useState(db);
  const [cartList, setCartList] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Gallery
              productList={productList}
              setProductList={setProductList}
            />
          }
        />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
