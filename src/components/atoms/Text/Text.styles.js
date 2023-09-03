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
      const { sizes, types } = props.theme.components.text;
      return types[props.$type]?.size || sizes[props.$size];
    }};
    font-weight: ${() => {
      const { weights, types } = props.theme.components.text;
      return types[props.$type]?.weight || weights[props.$weight];
    }};
    line-height: ${() => {
      const { lineHeights, types } = props.theme.components.text;
      return types[props.$type]?.lineHeight || lineHeights[props.$size];
    }};
    text-align: ${props.$align};
    text-decoration: ${props.$decoration};

    ${marginProperties(props)}
    ${paddingProperties(props)}
  `;
};

const TextWrapper = styled.p`
  ${(props) => textStyles(props)};
`;

const LabelWrapper = styled.label`
  display: inline-block;
  ${(props) => textStyles(props)};
`;

export const Styles = {
  LabelWrapper,
  TextWrapper,
};
