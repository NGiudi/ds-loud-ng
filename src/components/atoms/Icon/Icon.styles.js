import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getColor, marginProperties } from "../../../utils/styles";

import { ICON_SIZES, ICON_WRAPPER_SIZES } from "../../../assets/styles/icon";

const IconItem = styled(FontAwesomeIcon)`
  ${(props) => css`
    font-size: ${ICON_SIZES[props.$customsize]};
    max-height: ${ICON_SIZES[props.$customsize]};
    max-widt: ${ICON_SIZES[props.$customsize]};
  `}
`;

const IconWrapper = styled("div")`
  ${(props) => css`
    align-items: center;
    color: ${getColor(props.theme, props.$color)};
    display: inline-flex;
    height: ${ICON_WRAPPER_SIZES[props.size]};
    justify-content: center;
    width: ${ICON_WRAPPER_SIZES[props.size]};

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  IconItem,
  IconWrapper,
};
