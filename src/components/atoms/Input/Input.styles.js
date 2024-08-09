import styled, { css } from "styled-components";

import { ErrorMessage, Field } from "formik";

import { marginProperties, paddingProperties } from "../../../utils/styles";

import { TEXT_TYPES } from "../../../assets/styles/text";

const Error = styled(ErrorMessage)`
  ${(props) => css`
    color: ${props.theme.colors.alert.colors.error};
    font-size: ${TEXT_TYPES.bodyRegular.size};
    font-weight: ${TEXT_TYPES.bodyRegular.weight};
    line-height: ${TEXT_TYPES.bodyRegular.lineHeight};
  `};
`;

const ErrorWrapper = styled("div")`
  ${(props) => css`
    height: ${TEXT_TYPES.bodyRegular.lineHeight};

    ${marginProperties(props)}
  `};
`;

const InputStyles = styled(Field)`
  ${(props) => css`
    background-color: transparent;
    border: none;
    flex-grow: 1;
    font-size: ${TEXT_TYPES.captionRegular.size};
    font-weight: ${TEXT_TYPES.captionRegular.weight};
    height: ${props.theme.components.input.height};
    line-height: ${TEXT_TYPES.captionRegular.lineHeight};
    outline: none;
    padding: 0;
  `};
`;

const InputWrapper = styled("div")`
  ${(props) => css`
    align-items: center;
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.input.border.radius};
    border-style: solid;
    border-width: ${props.theme.components.input.border.weight};
    box-sizing: border-box;
    display: flex;
    width: 100%;

    ${marginProperties(props)}
    ${paddingProperties(props, props.theme.components.input.padding)}
  `};
`;

const Wrapper = styled("div")`
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
