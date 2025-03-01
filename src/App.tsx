import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Login from "./pages/login/Login";
import { useLoginContext } from "./context/LoginContext";

function App() {

  const { isLogin } = useLoginContext();

  return (
    <div className="font-[Poppins]">
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={isLogin ? <Navigate to='/' />:<Login />} />
            <Route />
          </Routes>
        </Layout>
      </CartContextProvider>
    </div>
  );
}

export default App;
