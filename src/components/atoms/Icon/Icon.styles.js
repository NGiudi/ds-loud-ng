import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconItem = styled(FontAwesomeIcon)`
  ${(props) =>
    css`
      font-size: ${props.theme.components.icon.iconSizes[props.$customsize]};
      max-height: ${props.theme.components.icon.iconSizes[props.$customsize]};
      max-widt: ${props.theme.components.icon.iconSizes[props.$customsize]};
    `}
`;

const IconWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  ${(props) =>
    css`
      color: ${typeof props.$color === "object"
        ? props.theme.colors[props.$color.tone][`_${props.$color.intensity}`]
        : props.$color};
      height: ${props.theme.components.icon.wrapperSizes[props.size]};
      width: ${props.theme.components.icon.wrapperSizes[props.size]};
      ${marginProperties(props)}
    `}
`;

export const Styles = {
  IconItem,
  IconWrapper,
};
