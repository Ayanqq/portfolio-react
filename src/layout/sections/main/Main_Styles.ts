import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

    ${Button} {
        margin-top:50px;
        height:50px;
        
        @media {
            margin-bottom:60px;
        }
    }
    
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    bottom: -16px;
    z-index: -1;
    
    margin-left:-5px;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left:20px;

    }
  }

`


const StyledImg = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right:15px;


  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif ", weight: 700, Fmax: 50, Fmin: 36})};
  
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 1;
    white-space: nowrap;
    
    
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin:15px 0 22px;
  }
`
const StyledH1 = styled.h1`
  font-size: 27px;
  font-weight: 400;
  
  p {
    display:none;
  }

  ${font({weight: 400, Fmax: 27, Fmin: 20})};

  
  @media ${theme.media.mobile} {
    margin-bottom: 65px;
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`



export const S = {
    StyledMain,
    PhotoWrapper,
    StyledImg,
    Name,
    StyledH1,
    SmallText,

}