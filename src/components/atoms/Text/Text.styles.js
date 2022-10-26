import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const textStyles = (props) => {
  return css`
    color: ${props.color};
    font-family: "Roboto", sans-serif;
    font-size: ${props.theme.components[props.type].sizes[props.size]};
    font-weight: ${props.theme.components[props.type].weights[props.weight]};
    line-height: ${props.theme.components[props.type].lineHeight[props.size]};
    text-decoration: ${props.underline && "underline"};

    ${marginProperties(props)}
    ${paddingProperties(props)}
  `;
};

const TextWrapper = styled.p`
  ${(props) => textStyles(props)};
`;

const LabelWrapper = styled.label`
  ${(props) => textStyles(props)};
`;

const Styles = {
  LabelWrapper,
  TextWrapper,
};

export default Styles;
