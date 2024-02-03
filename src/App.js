import "./App.css";
import Login from "./components/Login";
import Dasboard from "./components/Dasboard";
import { SpotifyProvider } from "./Context/SpotifyProvider";
import { getCode, getTokenFromUrl } from "./helpers/helperMethods";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", token);
  }, []);
  return (
    <SpotifyProvider>
      {token ? <Dasboard code={token} /> : <Login />}
    </SpotifyProvider>
  );
}

export default App;
