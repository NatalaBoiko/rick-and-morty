import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Character = lazy(() => import("./pages/Character/Character"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
