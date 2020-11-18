import React from "react"
import styled from "styled-components";
import backImg from '../../images/background.jpg'

const index = () => {
  return (
    <HeroContainer>
      <h1>Travel More</h1>
      <p>Plan your next trip today</p>
      <HeroBtns>
        <Button fontBig big primary >Get Started</Button>
      </HeroBtns>
    </HeroContainer>
  )
}

export default index

const HeroContainer = styled.div`
  background: url(${backImg}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;

  h1{
    color: #fff;
    font-size: 100px;
    margin-top: 0px;

    @media (max-width: 960px) {
      h1 {
        font-size: 70px;
      }
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 60px;
      }
      p {
        font-size: 30px;
      }
    }
  }
  p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
  }
`
const HeroBtns = styled.div`
  margin-top: 32px;
`

const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#ff4040" : "#0467fb")};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  transition: all 300ms;

  &:hover {
    transform: scale(1.1);
    background: ${({ primary }) => (primary ? "#0467fb" : "#ff4040")};

    @media (max-width: 960px) {
      width: 100%;
    }
  }
`