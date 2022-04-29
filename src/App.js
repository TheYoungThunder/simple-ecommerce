import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
