import styled, { css } from "styled-components";

const ColorBox = styled("div")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors[props.$color][props.$intensity]};
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    margin: 20px auto;
    width: 90%;
  `}
`;

export const Styles = {
  ColorBox,
};