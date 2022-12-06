import React, { createContext, useContext, useState } from "react";

const SpotifyContext = createContext();

export const useSpotify = () => {
  return useContext(SpotifyContext);
};

export const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [albumId, setAlbumId] = useState();
  const [uri, setUri] = useState();

  const updateAccessToken = (val) => {
    setAccessToken(val);
  };

  const updateAlbumId = (val) => {
    setAlbumId(val);
  };

  const updateUri = (val) => {
    setUri(val);
  };

  return (
    <SpotifyContext.Provider
      value={{
        accessToken,
        updateAccessToken,
        albumId,
        updateAlbumId,
        uri,
        updateUri,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
