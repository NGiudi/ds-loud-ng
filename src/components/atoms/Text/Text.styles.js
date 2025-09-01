import styled, { css } from "styled-components";

import {
  getColor,
  marginProperties,
  paddingProperties,
} from "../../../utils/styles";

import { TEXT_TYPES } from "../../../assets/styles/common.consts";

const textStyles = (props) => {
  return css`
    color: ${getColor(props.theme, props.$color)};
    font-family: "Source Sans 3", sans-serif;
    font-size: ${() => {
      return TEXT_TYPES[props.$type]?.size;
    }};
    font-weight: ${() => {
      return TEXT_TYPES[props.$type]?.weight;
    }};
    line-height: ${() => {
      return TEXT_TYPES[props.$type]?.lineHeight;
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
    user-select: none;

    ${textStyles(props)}
  `}
`;

export const Styles = {
  LabelWrapper,
  TextWrapper,
};