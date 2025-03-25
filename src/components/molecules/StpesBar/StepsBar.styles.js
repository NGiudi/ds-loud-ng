import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const getColor = (theme, type) => {
  switch (type) {
    case "pendingCircle":
      return theme.colors.black._300;
    case "checkedCircle":
    case "circle":
    default:
      return theme.colors.orange._600;
  }
};

const getBgColor = (theme, type) => {
  switch (type) {
    case "pendingCircle":
      return theme.colors.black._300;
    case "circle":
      return "none";
    case "checkedCircle":
    default:
      return theme.colors.orange._600;
  }
};

export const Circle = styled("div")`
  ${(props) => css`
    align-items: center;
    background-color: ${getBgColor(props.theme, props.type)};
    border: 3px solid ${getColor(props.theme, props.type)};
    border-radius: 50%;
    color: ${props.theme.colors.black._100};
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
  `}
`;

export const ProgressBarWrapper = styled("div")`
  flex-grow: 1;
  padding: 0px 10px;
`;

export const StepsWrapper = styled("div")`
  ${(props) => css`
    align-items: center;
    display: flex;

    ${marginProperties(props)}
  `}
`;