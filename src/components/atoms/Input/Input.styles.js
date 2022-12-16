import styled, { css } from "styled-components";

import { ErrorMessage, Field } from "formik";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const Error = styled(ErrorMessage)`
  ${(props) =>
    css`
      color: ${props.theme.colors.alert.colors.error};
      font-size: ${props.theme.components.text.sizes.md};
      font-weight: ${props.theme.components.text.weights.regular};
      line-height: ${props.theme.components.text.lineHeight.md};

      ${marginProperties(props)}
    `};
`;

const InputStyles = styled(Field)`
  background-color: transparent;
  border: none;
  flex-grow: 1;
  height: 24px;
  outline: none;

  ${(props) =>
    css`
      font-size: ${props.theme.components.text.sizes.md};
      font-weight: ${props.theme.components.text.weights.regular};
      line-height: ${props.theme.components.text.lineHeight.md};
    `};
`;

const InputWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${(props) =>
    css`
      border-color: ${props.theme.components.input.border.color};
      border-radius: ${props.theme.components.input.border.radius};
      border-style: solid;
      border-width: ${props.theme.components.input.border.weight};

      ${marginProperties(props)}
      ${paddingProperties(props, "x-6 y-2")}
    `};
`;

const Wrapper = styled.div`
  ${(props) =>
    css`
      ${marginProperties(props)}
    `};
`;

const Styles = {
  Error,
  InputStyles,
  InputWrapper,
  Wrapper,
};

export default Styles;