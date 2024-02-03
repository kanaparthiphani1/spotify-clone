import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [expiresIn, setExpiresIn] = useState();
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  useEffect(() => {
    if (!code) {
      return;
    }
    axios
      .post(`${process.env.REACT_APP_REDIRECT_URI}/login`, { code })
      .then((res) => {
        console.log("CAME HERE : ", res.data.accessToken);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(`${process.env.REACT_APP_REDIRECT_URI}/refresh`, {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        })
        .catch((err) => {});
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [expiresIn, refreshToken]);
  return accessToken;
}
