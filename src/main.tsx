import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Header from "./components/Header/Header.tsx";
import About from "./pages/About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
