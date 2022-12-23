import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  display: inline-block;

  ${(props) =>
    css`
      background-color: ${props.theme.colors[props.color]._200};
      border-radius: ${props.theme.components.badge.border.radius};

      ${marginProperties(props)}
      ${paddingProperties(props, "x-8 y-4")}
    `}
`;

export const Styles = {
  Wrapper,
};
