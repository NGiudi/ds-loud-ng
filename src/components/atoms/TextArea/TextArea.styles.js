import styled, { css } from "styled-components";

import { Field } from "formik";

import { marginProperties } from "../../../utils/styles";

const TextArea = styled(Field)`
  ${(props) => css`
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.textArea.border.radius};
    border-style: solid;
    border-width: ${props.theme.components.textArea.border.width};
    box-sizing: border-box;
    padding: ${props.theme.components.textArea.padding};
    resize: none;
    width: 100%;

    &::-webkit-scrollbar {
      width: ${props.theme.components.panel.scroll.width};
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
