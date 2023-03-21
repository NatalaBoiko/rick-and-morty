import s from "./Layout.module.css";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";

const Layout = () => {
  // const [user, setUser] = useState({});
  // console.log(user);

  // function handleCallbakResponse(response) {
  //   console.log("Encoded JWT token:" + response.credential);
  //   const userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById("signInDiv").hidden = true;
  // }

  // function handleSignOut() {
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
    <div className={s.layout}>
      <header className={s.nav}>
        <Link className={s.navLink} to="/home">
          Home
        </Link>
        <Link className={s.navLink} to="/">
          Main
        </Link>

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

        {Object.keys({ user }).length != 0 && (
          <button
            onClick={(e) => {
              handleSignOut(e);
            }}
          >
            Sign out
          </button>
        )} */}
      </header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
