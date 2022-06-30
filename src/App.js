import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./components/cart/Cart";
import { ProductsProvider } from "./context/ProductsContext";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./components/signup/SignIn";
import SignUp from "./components/signup/SignUp";
import Successful from "./components/signup/Successful";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <>
          <Router>
            <ToastContainer />
            <NavBar />
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/successful" element={<Successful />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
