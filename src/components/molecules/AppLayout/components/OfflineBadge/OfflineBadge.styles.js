import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

export const Wrapper = styled.div`
  align-items: center;
  border-radius: 0 0 5px 5px;
  display: flex;
  left: 50%;
  position: absolute;
  top: 100%;

  ${(props) => css`
    background-color: ${props.theme.colors.alert.bgColors.warning};
    box-shadow: ${props.theme.shadows.level2};
    color: ${props.theme.colors.alert.colors.warning};
    ${paddingProperties(props, "x-10 y-5")}
  `}
`;
