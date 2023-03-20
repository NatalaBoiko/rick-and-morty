import "./App.css";
import { Routes, Route } from "react-router-dom";

import { lazy } from "react";

import "./App.css";

// import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import NotFound from "./pages/NotFound/NotFound";

const Home = lazy(() => import("./pages/Home/Home"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className="app">
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
