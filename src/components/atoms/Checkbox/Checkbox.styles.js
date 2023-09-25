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
    border-radius: ${props.theme.components.checkbox.check.border.radius};
    border-style: solid;
    border-width: ${props.theme.components.checkbox.check.border.width};
    box-sizing: border-box;
    flex-shrink: 0;
    height: ${props.theme.components.checkbox.check.width};
    margin: ${props.theme.components.checkbox.check.margin};
    width: ${props.theme.components.checkbox.check.width};

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
  `}
`;

export const Styles = {
  CustomCheckbox,
};
