import React from "react";
import styled from "styled-components";

const GameOverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;

  background-color: #5f5f5f;
  opacity: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px
`;

const GameOverScoreContainer = styled.div`
  font-size: 27px;
  font-weight: bold;
  color: #ECEFF1;
`;

const GameOverRestartButton = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
  cursor: pointer;
  
  &:hover {
    background: #2EE59D;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
    color: white;
    transform: translateY(-7px);
  }
`;

const GameOverComponent = ({score, startNewGame}) => (<GameOverContainer>
    <GameOverScoreContainer>{`Score: ${score}`}</GameOverScoreContainer>
    <GameOverRestartButton onClick={startNewGame}>Restart</GameOverRestartButton>
</GameOverContainer>);

export default GameOverComponent;