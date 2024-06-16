import styled, { css } from "styled-components";

import {
  getColor,
  marginProperties,
  paddingProperties,
} from "../../../utils/styles";

const textStyles = (props) => {
  return css`
    color: ${getColor(props.theme, props.$color)};
    font-family: "Source Sans 3", sans-serif;
    font-size: ${() => {
      const { types } = props.theme.components.text;
      return types[props.$type]?.size;
    }};
    font-weight: ${() => {
      const { types } = props.theme.components.text;
      return types[props.$type]?.weight;
    }};
    line-height: ${() => {
      const { types } = props.theme.components.text;
      return types[props.$type]?.lineHeight;
    }};
    text-align: ${props.$align};
    text-decoration: ${props.$decoration};

    ${marginProperties(props)}
    ${paddingProperties(props)}
  `;
};

const TextWrapper = styled("p")`
  ${(props) => css`
    ${textStyles(props)}
  `}
`;

const LabelWrapper = styled("label")`
  ${(props) => css`
    display: inline-block;

    ${textStyles(props)}
  `}
`;

export const Styles = {
  LabelWrapper,
  TextWrapper,
};
