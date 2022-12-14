import styled, { css } from "styled-components";

import { marginProperties } from "../../../../../utils/styles";

const IconPlaceholder = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.orange._600};
      border-radius: ${props.type === "round" ? "50%" : "0"};
      height: ${props.theme.components.image.height[props.type][props.size]};
      width: ${props.theme.components.image.width[props.type][props.size]};

      ${marginProperties(props)}
    `};
`;

export const Styles = {
  IconPlaceholder,
};
