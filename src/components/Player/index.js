import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSpotify } from "../../Context/SpotifyProvider";
import "./style.css";

const Player = () => {
  const { accessToken,uri } = useSpotify();
  console.log("Token: " + accessToken);
  console.log("URI : ",uri );
  return (
    <div className="player-outer">
      <div className="player-inner">
        <SpotifyPlayer
          token={accessToken}
          className="player"
          styles={{
            // playerHeight: 200
            sliderHeight: 10,
            bgColor : '#474646',
            color: '#1ed75f',
            activeColor: "#1ed75f",
            height : "90px",
            loaderColor  :"#1ed75f",
            sliderColor : "#1ed75f",
            sliderTrackBorderRadius : "20px",
            sliderTrackColor: "grey",
            trackNameColor: "white",
            trackArtistColor : "white",
            sliderHandleColor: "#1ed75f"
          }}
          uris={[uri]}
          play={!uri?false:true}
          magnifySliderOnHover={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default Player;
