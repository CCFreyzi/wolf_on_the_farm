import styled from "styled-components";

const WolfImage = styled.img`
  width: 1000px;
  height: 750px;
  position: absolute;
  display: ${({isDisplay}) => isDisplay ? "block" : "none"};
  z-index: 10;
`;

export const WolfRightDown = (props) => (
    <WolfImage {...props} src="./wolf_right_down.svg" />
);

export const WolfLeftDown = (props) => (
    <WolfImage {...props} src="./wolf_left_down.svg" />
);

export const WolfRightUp = (props) => (
    <WolfImage {...props} src="./wolf_right_up.svg" />
);

export const WolfLeftUp = (props) => (
    <WolfImage {...props} src="./wolf_left_up.svg" />
);

export const BackgroundImage0 = (props) => (
    <WolfImage {...props} src="./chicken_static.svg" />
);
export const BackgroundImage1 = (props) => (
    <WolfImage {...props} src="./chicken_1.svg" />
);
export const BackgroundImage2 = (props) => (
    <WolfImage {...props} src="./chicken_2.svg" />
);
export const BackgroundImage3 = (props) => (
    <WolfImage {...props} src="./chicken_3.svg" />
);
export const BackgroundImage4 = (props) => (
    <WolfImage {...props} src="./chicken_4.svg" />
);