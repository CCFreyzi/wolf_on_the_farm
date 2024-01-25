import styled from "styled-components";

export const GameContainer = styled.div`
  width: 1000px;
  height: 750px;
  position: relative;
  background: #fff url(${({backgroundImage}) => backgroundImage});
  background-size: cover;
`;

export const Score = styled.div`
  position: absolute;
  width: 110px;
  height: 50px;
  padding-right: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: url(./score.svg);
  background-size: auto 50px;
  top: 0;

  img {
    width: 100px;
  }
`;

export const BrokenEgsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  display: flex;
`;
export const LifeEgg = styled.div`
  background: url(./color_logo_34.svg) no-repeat;
  background-size: contain;
  height: 50px;
  width: 50px;
`;

export const EggContainer = styled.div`
  @keyframes autoAnimate {
    from {
      padding-left: 0;
    }
    to {
      padding-left: calc(360px - 75px);
    }
  }
  
  position: absolute;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  box-sizing: border-box;
  width: 360px;
  height: 75px;
  display: flex;
  align-items: flex-end;
  padding-left: calc(360px - 75px);
  transform: rotate(${({corner}) => corner}deg);
  transform-origin: left bottom;
  justify-content: space-between;

  animation: autoAnimate ${({speed}) => speed}ms linear;
`;
export const Egg = styled.div`
  @keyframes eggRoll {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes eggRevertRoll {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  transform: rotate(360deg);

  height: 75px;
  width: 75px;
  background: url(${({ eggsImage }) => `./${eggsImage}.svg`}) no-repeat center top;
  background-size: contain;
   animation: ${({speed}) => speed}ms linear infinite ${({isRight}) => isRight ? "eggRevertRoll" : "eggRoll"};
  
  ${({isPlusOne, corner}) => {
      return isPlusOne && `animation: none; transform: rotate(${-corner}deg); background-size: 30px;`
  }}
`;