import styled, { css } from "styled-components";

import { paddingProperties } from "../../../utils/styles";

export const ContentBox = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
  overflow: auto;

  ${(props) => css`
    width: calc(100vw - ${
      props.isExpanded
        ? props.theme.components.appLayout.sidebar.width.expanded
        : props.theme.components.appLayout.sidebar.width.contracted
    });

    &::-webkit-scrollbar {
      width: ${props.theme.components.appLayout.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: ${props.theme.components.appLayout.scroll.radious});
    }

    ${paddingProperties(props, "a-20")}
  `}
`;

export const MainContent = styled.div`
  display: flex;
  width: 100vw;

  ${(props) => css`
    height: calc(100vh - ${props.theme.components.appLayout.topbar.height});
  `}
`;

export const TopBar = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: 100vw;

  ${(props) => css`
    color: ${props.theme.colors.black._100};
    background-color: ${props.theme.colors.black._700};
    box-shadow: ${props.theme.shadows.level3};
    height: ${props.theme.components.appLayout.topbar.height};
    z-index: 10;

    ${paddingProperties(props)}
  `}
`;
