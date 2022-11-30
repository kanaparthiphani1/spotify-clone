import styled from "styled-components";

export const OuterContainer = styled.div`
    display : flex;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url('images/bg_login_lg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content : center;
    align-items: center
`

export const LoginCont = styled.div`
    width: 456px;
    height: 430px;
    background-color: rgba(0,0,0,0.89);
    border-radius: 10px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

export const Logo = styled.img`
        width: 100px;
`

export const Heading = styled.h1`
    color : white
`

export const Button = styled.button`
    width: 250px;
    background-color: #1DB954;
    border-radius: 20px;
    border: 0px;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;

`