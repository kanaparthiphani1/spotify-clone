import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useSpotify } from "../../Context/SpotifyProvider";
import "./style.css";

const spotifyApi = new SpotifyWebApi({
  clientId: "4d42149c2dfa424eb6e5f85a0b084b4f",
});

const Detail = () => {
  const [album, setAlbum] = useState();
  const { albumId, accessToken,updateUri } = useSpotify();
  const navigate = useNavigate()

  const getArtists = (artists) => {
    let name = "";
    artists.forEach((element) => {
      name = name + element.name + ", ";
    });

    console.log();

    return name.slice(0, -2);
  };

  useEffect(() => {
    if (!albumId) return;
    if (!accessToken) {
      return;
    }
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getAlbum(albumId).then(
      function (data) {
        console.log("Album information : ", data.body);
        setAlbum(data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  }, [albumId]);

  return (
    <>
      {!album ? (
        <h1>Loading</h1>
      ) : (
        <div className="outer-detail">
          <div className="upper-detail">
            <div className="left-upper-detail">
              <button className="backBtn" onClick={()=>{navigate(-1)}}>
                <i className="fa-solid fa-arrow-left-long icon"></i>Back
              </button>
              <img className="albumImg" src={album.images[0].url} alt="album" />
            </div>
            <div className="right-upper-detail">
              <h4 className="type">{album.album_type}</h4>
              <h1 className="albumName">{album.name}</h1>
              <h3 className="artist">{getArtists(album.artists)}</h3>
            </div>
          </div>
          <div className="lower-detail">
            <table className="albums-table">
              <thead>
                <tr>
                  <th className="trackNum">#</th>
                  <th>Track</th>
                  <th>Duration</th>
                  <th>Artist[s]</th>
                </tr>
              </thead>
              <tbody>
                {album.tracks.items.map((track) => (
                  <tr className="rowData" onClick={()=>{updateUri(track.uri)}}>
                    <td className="trackNum">{track.track_number}</td>
                    <td>{track.name}</td>
                    <td>
                      {Math.floor((track.duration_ms / 1000 / 60) << 0)}:
                      {Math.floor((track.duration_ms / 1000) % 60)}
                    </td>
                    <td>{getArtists(track.artists)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
