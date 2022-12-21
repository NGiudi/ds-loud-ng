import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

const BottomContentStyles = styled.div`
  border-top-style: solid;

  ${(props) => css`
    border-top-color: ${props.theme.colors.black._200};
    border-top-width: ${props.theme.components.appLayout.sidebar.border.width};

    ${paddingProperties(props, "y-2")}
  `}
`;

const SideBarButton = styled.div`
  box-sizing: border-box;
  display: flex;

  ${(props) => css`
    width: ${props.isExpanded
      ? props.theme.components.appLayout.sidebar.width.expanded
      : props.theme.components.appLayout.sidebar.width.contracted};

    &:hover {
      background-color: ${props.theme.colors.black._100};
    }

    ${paddingProperties(props, "l-18 y-12")}
  `}
`;

const SideBarButtonsWrapper = styled.div`
  /* TODO: height: 49px = padding button + padding sidebarBottom + border */
  height: calc(100% - 49px);
  overflow-y: auto;

  ${(props) => css`
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
  `}
`;

const SideBarStyles = styled.div`
  border-right-style: solid;
  height: 100%;
  position: relative;

  ${(props) => css`
    border-right-color: ${props.theme.colors.black._200};
    border-right-width: ${props.theme.components.appLayout.sidebar.border
      .width};
  `}
`;

const Styles = {
  BottomContentStyles,
  SideBarButton,
  SideBarButtonsWrapper,
  SideBarStyles,
};

export default Styles;
