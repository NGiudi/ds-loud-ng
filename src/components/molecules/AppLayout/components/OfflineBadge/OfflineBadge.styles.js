import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

export const Wrapper = styled("div")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors.alert.bgColors.warning};
    border-radius: 0 0 5px 5px;
    box-shadow: ${props.theme.shadows.level2};
    color: ${props.theme.colors.alert.colors.warning};
    display: flex;
    left: 50%;
    position: absolute;
    top: 100%;

    ${paddingProperties(props, "x-10 y-5")}
  `}
`;
