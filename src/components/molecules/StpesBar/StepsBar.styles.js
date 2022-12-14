import styled, { css } from "styled-components";

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

export const Circle = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  ${(props) =>
    css`
      background-color: ${getBgColor(props.theme, props.type)};
      border: 3px solid ${getColor(props.theme, props.type)};
      color: ${props.theme.colors.black._100};
      height: ${props.theme.components.stepsBar.circle.diameter[props.size]};
      width: ${props.theme.components.stepsBar.circle.diameter[props.size]};
    `}
`;

export const ProgressBarWrapper = styled.div`
  flex-grow: 1;
  padding: 0px 10px;
`;

export const StepsWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0px 60px;
`;
