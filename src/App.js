import "./App.css";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import { Suspense, lazy } from "react";

import "./App.css";
// import Menu from "./pages/Menu/Menu";

import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
// import List from "./pages/List/List";
import NotFound from "./pages/NotFound/NotFound";

// const Home = lazy(() => import("./pages/Home/Home"));
// const Character = lazy(() => import("./pages/Character/Characte"));

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
