import React from 'react'
import {
    OuterContainer,
    LoginCont,
    Logo,
    Heading,
    Button
    } from './style'

const Login=()=> {
  return (
    <OuterContainer>
        <LoginCont>
            <Logo src='images/spotify-logo.png' alt='spotify'/>
            <Heading>Spotify Remix</Heading>
            <Button>Login with Spotify</Button>
        </LoginCont>
    </OuterContainer>
  )
}

export default Login