import styled, { css } from "styled-components";

import { ErrorMessage, Field } from "formik";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const Error = styled(ErrorMessage)`
  ${(props) => css`
    color: ${props.theme.colors.alert.colors.error};
    font-size: ${props.theme.components.text.sizes.sm};
    font-weight: ${props.theme.components.text.weights.regular};
    line-height: ${props.theme.components.text.lineHeights.sm};
  `};
`;

const ErrorWrapper = styled.div`
  ${(props) => css`
    height: ${props.theme.components.text.lineHeights.sm};

    ${marginProperties(props)}
  `};
`;

const InputStyles = styled(Field)`
  background-color: transparent;
  border: none;
  flex-grow: 1;
  outline: none;
  padding: 0;

  ${(props) => css`
    font-size: ${props.theme.components.text.sizes.md};
    font-weight: ${props.theme.components.text.weights.regular};
    height: ${props.theme.components.input.height};
    line-height: ${props.theme.components.text.lineHeights.md};
  `};
`;

const InputWrapper = styled.div`
  align-items: center;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${(props) => css`
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.input.border.radius};
    border-width: ${props.theme.components.input.border.weight};

    ${marginProperties(props)}
    ${paddingProperties(props, props.theme.components.input.padding)}
  `};
`;

const Wrapper = styled.div`
  ${(props) => css`
    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Error,
  ErrorWrapper,
  InputStyles,
  InputWrapper,
  Wrapper,
};
