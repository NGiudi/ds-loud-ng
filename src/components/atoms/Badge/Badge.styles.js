import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  display: inline-block;

  ${(props) =>
    css`
      background-color: ${typeof props.color === "object"
        ? props.theme.colors[props.color.tone][`_${props.color.intensity}`]
        : props.color};
      border-radius: ${props.theme.components.badge.border.radius};

      ${marginProperties(props)}
      ${paddingProperties(props, props.theme.components.badge.padding)}
    `}
`;

export const Styles = {
  Wrapper,
};
