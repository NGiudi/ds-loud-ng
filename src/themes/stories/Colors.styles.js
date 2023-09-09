import styled, { css } from "styled-components";

const ColorBox = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors[props.$color][props.$intensity]};
    border-radius: 8px;
    height: 50px;
    margin: 20px auto;
    width: 90%;
  `}
`;

export const Styles = {
  ColorBox,
};
