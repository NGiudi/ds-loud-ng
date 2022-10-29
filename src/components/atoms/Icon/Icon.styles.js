import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconItem = styled(FontAwesomeIcon)`
  ${(props) =>
    css`
      font-size: ${props.theme.components.icon.iconSizes[props.customsize]};
      max-height: ${props.theme.components.icon.iconSizes[props.customsize]};
      max-widt: ${props.theme.components.icon.iconSizes[props.customsize]};
    `}
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${(props) =>
    css`
      height: ${props.theme.components.icon.wrapperSizes[props.size]};
      width: ${props.theme.components.icon.wrapperSizes[props.size]};
      ${marginProperties(props)}
    `}
`;

const Styles = {
  IconItem,
  IconWrapper,
};

export default Styles;
