import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

import { Field } from "formik";

const SelectWrapper = styled(Field)`
  background-color: transparent;
  border: none;
  border-style: solid;
  outline: none;
  width: 100%;

  ${(props) =>
    css`
      border-color: ${props.theme.colors.black._400};
      border-radius: ${props.theme.components.select.border.radius};
      border-width: ${props.theme.components.select.border.weight};
      font-size: ${props.theme.components.text.sizes.md};
      font-weight: ${props.theme.components.text.weights.regular};
      line-height: ${props.theme.components.text.lineHeight.md};

      ${marginProperties(props)}
      ${paddingProperties(props, "x-8 y-8")}
    `};
`;

const Wrapper = styled.div`
  ${(props) =>
    css`
      ${marginProperties(props)}
    `};
`;

const Styles = {
  SelectWrapper,
  Wrapper,
};

export default Styles;
