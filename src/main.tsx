import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Pandana/"}>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </BrowserRouter>
  </StrictMode>
);
