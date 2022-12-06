import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useSpotify } from "../../Context/SpotifyProvider";
import "./index.css";
import { ImageContainer, ImageContainer1 } from "./styledComponents";

const spotifyApi = new SpotifyWebApi({
  clientId: "4d42149c2dfa424eb6e5f85a0b084b4f",
});

const colors = [
  "#EC6D45",
  "#E39C40",
  "#44B844",
  "#4B5B63",
  "#D8383B",
  "#7F5FFF",
  "#3965C5",
  "#9EB8C6",
  "#3AADC9",
  "#8ABF3D",
];

const Home = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [categories, setCategories] = useState([]);

  const { accessToken, updateAlbumId,updateUri } = useSpotify();

  const navigate = useNavigate();
  const onNewReleaseClick = (val) => {
    console.log("clicked : ", val);
    updateAlbumId(val.id);
    updateUri(val.uri)
    navigate("/detail");
  };

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getNewReleases({ limit: 10, offset: 0, country: "IN" })
      .then(function (data) {
        console.log("new relewase : ", data.body);
        setNewReleases(data.body.albums.items);
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });

    spotifyApi
      .getCategories({
        limit: 10,
        offset: 0,
        country: "IN",
      })
      .then(
        function (data) {
          console.log("cat : ", data.body);
          setCategories(data.body.categories.items);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    spotifyApi
      .getCategory("toplists", {
        country: "IN",
      })
      .then(
        function (data) {
          console.log("Single CAT : ", data.body);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    spotifyApi
      .getPlaylistsForCategory("toplists", {
        country: "IN",
        limit: 2,
        offset: 0,
      })
      .then(
        function (data) {
          console.log("PlayList from CAT", data.body);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    spotifyApi.getAlbum("0FIP7MeIO3yqL8K6uTz3b1").then(
      function (data) {
        console.log("Album information : ", data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  }, []);

  const NewReleases = () => {
    return (
      <div className="newReleaseCont">
        <h1 className="heading">New Releases</h1>
        <div className="newReleaseInner">
          {newReleases.length > 0 &&
            newReleases.map((val) => (
              <>
                <ImageContainer
                  className="cont"
                  onClick={() => onNewReleaseClick(val)}
                  // backgroundColor= "#1ed75fb7"
                  name={
                    val.name.slice(0, 25) + val.name.length > 10 ? "...." : ""
                  }
                >
                  <img
                    src={val.images[0].url}
                    className="newReleaseimg"
                    alt="ccc"
                  />
                  <p className="newReleaseName">
                    {val.name.slice(0, 15)}
                    {val.name.length > 10 ? "...." : ""}
                  </p>
                </ImageContainer>
              </>
            ))}
        </div>
      </div>
    );
  };

  const Categories = () => {
    return (
      <div className="newReleaseCont">
        <h1 className="heading">Categories</h1>
        <div className="newReleaseInner">
          {categories.length > 0 &&
            categories.map((val, ind) => (
              <>
                <ImageContainer1 className="cont" backgroundColor={colors[ind]}>
                  <img
                    src={val.icons[0].url}
                    className="newReleaseimg1"
                    alt="ccc"
                  />
                  <p className="newReleaseName1">
                    {val.name.slice(0, 15)}
                    {val.name.length > 10 ? "...." : ""}
                  </p>
                </ImageContainer1>
              </>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh"
      }}
    >
      <NewReleases />
      <Categories />
    </div>
  );
};

export default Home;
