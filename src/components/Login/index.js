import React from 'react'
import {
    OuterContainer,
    LoginCont,
    Logo,
    Heading,
    Button
    } from './style'


const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=4d42149c2dfa424eb6e5f85a0b084b4f&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
  

const Login= () => {
  return (
    <OuterContainer>
        <LoginCont>
            <Logo src='images/spotify-logo.png' alt='spotify'/>
            <Heading>Spotify Remix</Heading>
            <Button href={AUTH_URL}>Login with Spotify</Button>
        </LoginCont>
    </OuterContainer>
  )
}

export default Login