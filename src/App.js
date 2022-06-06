import "./index.css";
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { ProductsProvider } from "./ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <>
        <Router>
          <NavBar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </Router>
      </>
    </ProductsProvider>
  );
}

export default App;
