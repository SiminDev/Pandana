import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="font-[Poppins]">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
