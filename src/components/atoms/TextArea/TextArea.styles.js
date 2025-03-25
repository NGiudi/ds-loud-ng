import styled, { css } from "styled-components";

import { Field } from "formik";

import { marginProperties } from "../../../utils/styles";

const TextArea = styled(Field)`
  ${(props) => css`
    border-color: ${props.theme.colors.black._400};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    padding: 8px;
    resize: none;
    width: 100%;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._300};
    }

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  TextArea,
};