import React, { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useSpotify } from "../../Context/SpotifyProvider";
import useAuth from "../../helpers/useAuth";
import Home from "../Home";
import "./style.css";

const spotifyApi = new SpotifyWebApi({
  clientId: "4d42149c2dfa424eb6e5f85a0b084b4f",
});

const Dasboard = ({ code }) => {
  const accessToken = useAuth(code);
  const { updateAccessToken } = useSpotify();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getCategories({
        limit: 5,
        offset: 0,
        country: "IN",
      })
      .then(
        function (data) {
          console.log(data.body);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    spotifyApi
      .getPlaylistsForCategory("0JQ5DAqbMKFIdOwkMWR5at", {
        country: "IN",
        limit: 10,
        offset: 0,
      })
      .then(
        function (data) {
          console.log(data.body);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    updateAccessToken(accessToken);
  }, [accessToken, updateAccessToken]);

  const DasboardContainer = () => {
    return (
      <div className="outer-dashboard-cont">
        <div className="leftSideNav">
          <img
            className="appLogoHeade"
            src="images/spotify-logo.png"
            alt="spotify logo"
          />
          <div className="navbarCont">
            <div className="navLinkBar">
              <NavLink to="/profile" className="navLink">
                <i className="fa-solid fa-user icon"></i>
              </NavLink>
              <NavLink to="/" className="navLink">
                <i className="fa-solid fa-house icon home"></i>
              </NavLink>
              <NavLink to="/music" className="navLink">
                <i className="fa-solid fa-music icon home"></i>
              </NavLink>
              <NavLink to="/playlists" className="navLink">
                <i className="fa-solid fa-list icon"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="rightMainDashboard">
          <div className="rightInnerContainer">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };

  return <DasboardContainer />;
};

export default Dasboard;
