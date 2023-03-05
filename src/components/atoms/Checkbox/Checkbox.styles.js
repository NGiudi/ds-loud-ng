import styled from "styled-components";

import { Field } from "formik";

import checkImage from "../../../assets/img/check-mark.svg";

const CustomCheckbox = styled(Field)`
  ${(props) => `  
    appearance: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border-color: ${props.theme.colors.black._900};
    border-radius: ${props.theme.components.checkbox.border.radius};
    border-style: solid;
    border-width: ${props.theme.components.checkbox.border.width};
    box-sizing: border-box;
    flex-shrink: 0;
    height: ${props.theme.components.checkbox.width};
    width: ${props.theme.components.checkbox.width};

    &:checked {
      background-color: ${props.theme.colors.orange._700};
      background-image: url(${checkImage});
      border-color: ${props.theme.colors.orange._700};
    }
  `}
`;

export const Styles = {
  CustomCheckbox,
};
