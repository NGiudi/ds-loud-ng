import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const textStyles = (props) => {
  return css`
    color: ${typeof props.$color === "object"
      ? props.theme.colors[props.$color.tone][`_${props.$color.intensity}`]
      : props.$color};
    font-family: "Roboto", sans-serif;
    font-size: ${props.theme.components[props.type].sizes[props.size]};
    font-weight: ${props.theme.components[props.type].weights[props.$weight]};
    line-height: ${props.theme.components[props.type].lineHeight[props.size]};
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
