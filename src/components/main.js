import React from "react"
import styled from "styled-components";
import Game from "./game";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainPage = () => {

    return <MainContainer><Game /></MainContainer>
}

export default MainPage