import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="font-[Poppins]">
      <Layout>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
