import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    overflow: hidden;
    background-color: ${props=>props.backgroundColor?props.backgroundColor:'transparent'}
    z-index: 0;
    &::after{
        content: 'HIII';
        position: absolute;
        left: 0;
        bottom: -100%;
        width: 100%;
        height: 100%;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        border-bottom-left-radius:30px;
        border-bottom-right-radius:30px;
        color: white;
        transition: all 0.3s ease-in 0s,clip-path 0.4s ease-in-out 0.4s;
         background-color: #1ed75fb7;
         clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
        z-index:2;
        //  clip-path: polygon(100% 16%, 100% 100%, 0 100%, 0 83%);
    }

    &:hover::after{
        
        bottom: 0;
        border-bottom-left-radius:30px;
        border-bottom-right-radius:30px;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
        //  background-color: green;
        cursor:pointer;

    }

  
`

export const ImageContainer1 = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    overflow: hidden;
    background-color: ${props=>props.backgroundColor?props.backgroundColor:'transparent'};
    border-radius: 20px
  
`