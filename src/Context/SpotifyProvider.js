import React, { createContext, useContext, useState } from 'react'

const SpotifyContext = createContext();

export const useSpotify =()=>{
  return useContext(SpotifyContext);
}

export const SpotifyProvider = ({children}) => {

  const [accessToken, setAccessToken] = useState()

  const updateAccessToken = (val) =>{
    setAccessToken(val)
  }

  return (
    <SpotifyContext.Provider value={{accessToken,updateAccessToken}}>
       {children}
    </SpotifyContext.Provider>
  )
}
