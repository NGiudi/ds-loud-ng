import styled, { css } from "styled-components";

export const TriangleWrapper = styled.div`
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  position: absolute;
  top: -5px;
  transform: rotate(-90deg);

  ${(props) =>
    css`
      border-left: 10px solid ${props.theme.colors.alert.bgColors.neutral};
      ${props.direction === "right" && "left: 10px;"}
      ${props.direction === "left" && "right: 35px;"}
    `};
`;

export const PanelWrapper = styled.div`
  position: absolute;
  top: 100%;

  ${(props) =>
    css`
      width: ${props.theme.components.dropdown.panelSize.width};
      ${props.direction === "right" && "left: 0;"}
      ${props.direction === "left" && "right: 0;"}

      display: ${props.showPanel ? "block" : "none"};
    `};
`;
