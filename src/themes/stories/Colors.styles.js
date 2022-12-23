import styled, { css } from "styled-components";

const ColorBox = styled.div`
  border-radius: 8px;
  height: 50px;
  margin: 20px auto;
  width: 90%;

  ${(props) => {
    console.log(props.theme.colors.orange[props.intensity]);

    return css`
      background-color: ${props.theme.colors[props.color][props.intensity]};
    `;
  }}
`;

export const Styles = {
  ColorBox,
};
