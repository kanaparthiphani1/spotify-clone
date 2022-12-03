import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function useAuth(code) {
  const [expiresIn, setExpiresIn] = useState();
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  useEffect(() => {
    if (!code) {
      return;
    }
    axios
      .post(`http://localhost:3001/login`, { code })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        window.location = "/"
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        })
        .catch((err) => {});
    },(expiresIn -60)*1000);
    return () => clearInterval(interval)
  }, [expiresIn, refreshToken]);
  return accessToken;
}