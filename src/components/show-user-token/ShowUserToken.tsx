import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const ShowUserToken = () => {
  const { getIdTokenClaims } = useAuth0();
  const [userToken, setUserToken] = useState("");
  const getToken = async () => {
    const token = await getIdTokenClaims();
    localStorage.setItem("token", token?.__raw);
    setUserToken(token?.__raw);
  };
  useEffect(() => {
    getToken();
  }, []);

  return <div>{userToken}</div>;
};
export default ShowUserToken;
