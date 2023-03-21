import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import { useState } from "react";
// import jwt_decode from "jwt-decode";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/Layout/Layout";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const Home = lazy(() => import("./pages/Home/Home"));
const Character = lazy(() => import("./pages/Character/Character"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  // Google login
  // const [user, setUser] = useState({});
  // console.log(user);

  // function handleCallbakResponse(response) {
  //   console.log("Encoded JWT token:" + response.credential);
  //   const userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById("signInDiv").hidden = true;
  // }

  // function handleSignOut(e) {
  //   setUser({});
  //   document.getElementById("signInDiv").hidden = false;
  // }

  // useEffect(() => {
  //   // google
  //   const google = window.google;
  //   google.accounts.id.initialize({
  //     client_id:
  //       "1001921375002-asdkq7olffq1k3k319d6ee9lltk1nddn.apps.googleusercontent.com",
  //     callback: handleCallbakResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });

  //   google.accounts.id.prompt();
  // }, []);

  return (
    <>
      {/* <div
        id="signInDiv"
        onClick={(e) => {
          e.preventDefault();
        }}
      ></div>
      {user && (
        <div>
          <img className="userImg" src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
        </div>
      )}

      {Object.keys(user).length !== 0 && (
        <button
          onClick={(e) => {
            handleSignOut(e);
          }}
        >
          Sign out
        </button>
      )} */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
