import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./db.json";
import { nanoid } from "nanoid";
import NavBar from "./components/NavBar";
import DetailedProduct from "./components/DetailedProduct";

function App() {
  const dbWithId = db.products.map((product) => {
    return { ...product, id: nanoid() };
  });
  const [productList, setProductList] = useState(dbWithId);
  const [cartList, setCartList] = useState([]);
  const [noOfCartItems, setNoOfCartItems] = useState(cartList.length);

  const navigate = useNavigate(); // Newer hook introduced in react-router v6+ details here: https://www.kindacode.com/article/programmatically-navigate-using-react-router/

  useEffect(() => {
    setNoOfCartItems(cartList.length);
  }, [cartList]);

  // I combined all click handler functions into 1 here as you can see. I can also do the traditional method of assigning
  // different function, but this just simplified passing props through componenets
  //I could have used useRed(), but I choose ClassName for simplicity
  function handleClick(e, key) {
    e.stopPropagation();
    const kind = e.target.dataset.kind; //better to use this than classNames
    if (kind === "featured-image-test") {
      console.log(key);
      console.log("this is an image"); //this if statement was for testing purposes only
    } else if (kind === "add-to-cart-button") {
      console.log("this is a button");
      setCartList((prevCart) => {
        // add an instant of a product if the product doesnt exist in the cart already
        // otherwise just increment the item count
        const productInCartAlready = prevCart.find((item) => item.id === key);
        if (productInCartAlready) {
          return prevCart.map((item) => {
            return item.id === key ? { ...item, count: ++item.count } : item;
          });
        } else {
          const product = productList.find((product) => {
            return product.id === key;
          });
          return [...prevCart, { ...product, count: 1 }];
        }
      });
    } else if (kind === "remove-from-cart-button") {
      setCartList((prevCart) => {
        // decrement the item count, if count is zero remove the item instance
        return prevCart
          .filter((item) => item.count > 1)
          .map((item) =>
            item.id === key ? { ...item, count: --item.count } : item
          );
      });
      //the below else if references areas that when pressed should show a detailed product view
    } else if (
      kind === "product-container" ||
      kind === "featured-image" ||
      kind === "product-name"
    ) {
      navigate(`/products/${key}`);
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
        >
          <Route
            path="/products/:productId"
            element={
              <DetailedProduct productList={productList}></DetailedProduct>
            }
          ></Route>
        </Route>
        <Route
          path="cart"
          element={
            <Cart
              cartList={cartList}
              setCartList={setCartList}
              noOfCartItems={noOfCartItems}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* the above route was added to deal with no matches */}
      </Routes>
    </div>
  );
}

export default App;
