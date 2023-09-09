import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

const BottomContentStyles = styled("div")`
  ${(props) => css`
    border-top-color: ${props.theme.colors.black._200};
    border-top-style: solid;
    border-top-width: ${props.theme.components.appLayout.sidebar.border.width};

    ${paddingProperties(
      props,
      props.theme.components.appLayout.sidebar.bottomContent.padding,
    )}
  `}
`;

const SideBarButton = styled("button")`
  ${(props) => css`
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    color: ${props.$isSelectedSection
      ? props.theme.colors.orange._600
      : "inheret"};
    display: flex;
    width: ${props.$isExpanded
      ? props.theme.components.appLayout.sidebar.width.expanded
      : props.theme.components.appLayout.sidebar.width.contracted};

    ${paddingProperties(
      props,
      props.theme.components.appLayout.sidebar.button.padding,
    )}

    &:hover {
      background-color: ${props.theme.colors.black._200};
    }
  `}
`;

const SideBarButtonsWrapper = styled("div")`
  ${(props) => css`
    height: calc(100% - ${props.theme.components.appLayout.sidebar.content.height});
    overflow-y: auto;

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

const SideBarStyles = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-right-color: ${props.theme.colors.black._200};
    border-right-style: solid;
    border-right-width: ${props.theme.components.appLayout.sidebar.border
      .width};
    height: 100%;
    position: relative;
  `}
`;

export const Styles = {
  BottomContentStyles,
  SideBarButton,
  SideBarButtonsWrapper,
  SideBarStyles,
};
