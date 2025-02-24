import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <div className="font-[Poppins]">
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route />
          </Routes>
        </Layout>
      </CartContextProvider>
    </div>
  );
}

export default App;
