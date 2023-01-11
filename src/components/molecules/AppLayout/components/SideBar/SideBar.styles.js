import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

const BottomContentStyles = styled.div`
  border-top-style: solid;

  ${(props) => css`
    border-top-color: ${props.theme.colors.black._200};
    border-top-width: ${props.theme.components.appLayout.sidebar.border.width};

    ${paddingProperties(
      props,
      props.theme.components.appLayout.sidebar.bottomContent.padding
    )}
  `}
`;

const SideBarButton = styled.button`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  display: flex;

  ${(props) => css`
    color: ${props.isSelectedSection
      ? props.theme.colors.orange._600
      : "inheret"};

    width: ${props.isExpanded
      ? props.theme.components.appLayout.sidebar.width.expanded
      : props.theme.components.appLayout.sidebar.width.contracted};

    &:hover {
      background-color: ${props.theme.colors.black._200};
    }

    ${paddingProperties(
      props,
      props.theme.components.appLayout.sidebar.button.padding
    )}
  `}
`;

const SideBarButtonsWrapper = styled.div`
  overflow-y: auto;

  ${(props) => css`
    height: calc(100% - ${props.theme.components.appLayout.sidebar.content.height});
    
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
    background-color: ${props.theme.colors.black._100};
    border-right-color: ${props.theme.colors.black._200};
    border-right-width: ${props.theme.components.appLayout.sidebar.border
      .width};
  `}
`;

export const Styles = {
  BottomContentStyles,
  SideBarButton,
  SideBarButtonsWrapper,
  SideBarStyles,
};
