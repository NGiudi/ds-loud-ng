import styled, { css } from "styled-components";

const getColor = (theme, type) => {
  let color;

  switch (type) {
    case "pendingCircle":
      color = theme.colors.black._300;
      break;

    case "checkedCircle":
    case "circle":
    default:
      color = theme.colors.orange._700;
      break;
  }
  return color;
};

const getBgColor = (theme, type) => {
  let color;

  switch (type) {
    case "pendingCircle":
      color = theme.colors.black._300;
      break;

    case "circle":
      color = "none";
      break;

    case "checkedCircle":
    default:
      color = theme.colors.orange._700;
      break;
  }
  return color;
};

export const Circle = styled.div`
  align-items: center;
  border-radius: 50%;
  color: #fafafa;
  display: flex;
  justify-content: center;

  ${(props) =>
    css`
      background-color: ${getBgColor(props.theme, props.type)};
      border: 3px solid ${getColor(props.theme, props.type)};
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
