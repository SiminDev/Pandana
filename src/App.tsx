import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";

function App() {
  return (
    <div className="font-[Poppins]">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
