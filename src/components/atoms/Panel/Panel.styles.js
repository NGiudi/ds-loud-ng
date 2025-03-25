import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const PanelWrapper = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border: 1px solid ${props.theme.colors.black._200};
    border-radius: 4px;
    box-shadow: ${props.theme.shadows.level2};
    display: flex;
    flex-direction: column;
    justify-content: ${props.$align};
    position: relative;
    z-index: 10;

    ${marginProperties(props)}
    ${paddingProperties(props, "a-20")}
  `}
`;

export const Styles = {
  PanelWrapper,
};