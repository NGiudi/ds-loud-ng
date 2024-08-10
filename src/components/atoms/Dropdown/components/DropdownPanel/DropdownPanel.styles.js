import styled, { css } from "styled-components";

export const TriangleWrapper = styled("div")`
  ${(props) => css`
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${props.theme.colors.alert.bgColors.neutral};
    border-top: 10px solid transparent;
    position: absolute;
    top: -5px;
    transform: rotate(-90deg);

    ${props.direction === "right" && "left: 10px;"}
    ${props.direction === "left" && "right: 35px;"}
  `};
`;

export const PanelWrapper = styled("div")`
  ${(props) => css`
    display: ${props.$showPanel ? "block" : "none"};
    position: absolute;
    top: 100%;
    width: 200px;

    ${props.direction === "right" && "left: 0;"}
    ${props.direction === "left" && "right: 0;"}
  `};
`;
