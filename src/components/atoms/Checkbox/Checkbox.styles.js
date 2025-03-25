import styled from "styled-components";

import { Field } from "formik";

import checkImage from "../../../../public/images/check-mark.svg";

const CustomCheckbox = styled(Field)`
  ${(props) => `
    appearance: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border-color: ${props.theme.colors.black._400};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    flex-shrink: 0;
    height: 16px;
    margin: 1px 8px 0 0;
    width: 16px;

    &:not(:disabled) {
      &:checked {
        background-color: ${props.theme.colors.orange._500};
        background-image: url(${checkImage});
        border-color: ${props.theme.colors.orange._500};
      }

      &:hover&:checked {
        background-color: ${props.theme.colors.orange._700};
        border-color: ${props.theme.colors.orange._700};
      }

      &:hover&:not(:checked) {
        border-color: ${props.theme.colors.black._700};
      }
    }
    
    &:disabled {
      &:checked {
        background-color: ${props.theme.colors.black._400};
        background-image: url(${checkImage});
        border-color: ${props.theme.colors.black._400};
      }
    }
  `}
`;

export const Styles = {
  CustomCheckbox,
};