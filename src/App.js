import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Character = lazy(() => import("./pages/Character/Character"));

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className="app">
      {/* <Menu /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
