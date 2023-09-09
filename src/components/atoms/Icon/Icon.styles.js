import styled, { css } from "styled-components";

import { getColor, marginProperties } from "../../../utils/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconItem = styled(FontAwesomeIcon)`
  ${(props) => css`
    font-size: ${props.theme.components.icon.iconSizes[props.$customsize]};
    max-height: ${props.theme.components.icon.iconSizes[props.$customsize]};
    max-widt: ${props.theme.components.icon.iconSizes[props.$customsize]};
  `}
`;

const IconWrapper = styled("div")`
  ${(props) => css`
    align-items: center;
    color: ${getColor(props.theme, props.$color)};
    display: inline-flex;
    height: ${props.theme.components.icon.wrapperSizes[props.size]};
    justify-content: center;
    width: ${props.theme.components.icon.wrapperSizes[props.size]};

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  IconItem,
  IconWrapper,
};
