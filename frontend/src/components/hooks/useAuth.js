import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client =new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
      })
      .then((authenticated) => {
        setLogin(authenticated);
        if (authenticated) {
          setToken(client.token);
        }
      });
  }, []);

  return [isLogin, token];
};

export default useAuth;
