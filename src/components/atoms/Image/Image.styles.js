import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const ImageStyles = styled.img`
  display: block;

  ${(props) =>
    css`
      border-radius: ${props.type === "round" ? "50%" : "0px"};
      height: ${props.theme.components.image.height[props.type][props.size]};
      width: ${props.theme.components.image.width[props.type][props.size]};
      ${marginProperties(props, "a-0")}
    `};
`;

const WithoutImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.orange._700};
      border-radius: ${props.type === "round" ? "50%" : "0px"};
      height: ${props.theme.components.image.height[props.type][props.size]};
      width: ${props.theme.components.image.width[props.type][props.size]};
      ${marginProperties(props, "a-0")}
    `};
`;

const Styles = {
  ImageStyles,
  WithoutImage,
};

export default Styles;
