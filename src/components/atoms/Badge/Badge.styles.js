import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  display: inline-block;

  ${(props) =>
    css`
      background-color: ${props.theme.colors[props.color]._100};
      border-radius: ${props.theme.components.badge.border.radius};

      ${marginProperties(props)}
      ${paddingProperties(props, "x-8 y-4")}
    `}
`;

const Styles = {
  Wrapper,
};

export default Styles;
