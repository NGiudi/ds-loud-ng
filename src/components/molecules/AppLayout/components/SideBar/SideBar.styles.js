import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

export const BottomContentStyles = styled.div`
  border-top-style: solid;
  border-top-width: 1px;
  bottom: 0;
  position: absolute;
  width: 100%;

  ${(props) => css`
    border-top-color: ${props.theme.colors.black._200};

    ${paddingProperties(props, "y-2")}
  `}
`;

export const SideBarButton = styled.div`
  align-items: center;
  display: flex;

  ${(props) => css`
    &:hover {
      background-color: ${props.theme.colors.black._100};
      color: ${props.theme.colors.orange._700};
    }

    ${paddingProperties(props, "l-18 y-12")}
  `}
`;

export const SideBarStyles = styled.div`
  border-right-style: solid;
  box-sizing: border-box;
  height: 100%;
  position: relative;

  ${(props) => css`
    border-right-color: ${props.theme.colors.black._200};
    border-right-width: ${props.theme.components.appLayout.sidebar.border
      .width};
    width: ${props.isExpanded
      ? props.theme.components.appLayout.sidebar.width.expanded
      : props.theme.components.appLayout.sidebar.width.contracted};
  `}
`;
