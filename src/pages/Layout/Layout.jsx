import s from "./Layout.module.css";

import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Layout = () => {
  const [user, setUser] = useState({});
  console.log(user);
  console.log(user);

  function handleCallbakResponse(response) {
    console.log(response);
    console.log("Encoded JWT token:" + response.credential);
    const token = jwt_decode(response.credential);
    console.log(token);
    setUser(token);
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("logOut").hidden = false;
  }

  const handleSignOut = () => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("logOut").hidden = true;
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
      size: "large",
    });
  }, [user]);

  return (
    <div className={s.layout}>
      <header className={s.nav}>
        <div id="signInDiv"></div>

        {user && (
          <div>
            <img className={s.userImg} src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
            <div className={s.logOut} id="logOut" onClick={handleSignOut}>
              Sign out
            </div>
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
