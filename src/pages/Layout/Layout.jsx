import s from "./Layout.module.css";

import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Layout = () => {
  const [user, setUser] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("user"));
    return initialValue || {};
  });
  console.log(user);

  function handleCallbakResponse(response) {
    console.log(response);
    console.log("Encoded JWT token:" + response.credential);
    const userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setUser(userObject);
  }

  const handleSignOut = () => {
    setUser({});
  };

  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id:
        "1001921375002-asdkq7olffq1k3k319d6ee9lltk1nddn.apps.googleusercontent.com",
      callback: handleCallbakResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className={s.layout}>
      <header className={s.nav}>
        {Object.keys(user).length === 0 && <div id="signInDiv"></div>}

        {user && (
          <div>
            <img className={s.userImg} src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
          </div>
        )}

        {Object.keys(user).length !== 0 && (
          <div className={s.logOut} id="logOut" onClick={handleSignOut}>
            Sign out
          </div>
        )}
      </header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
