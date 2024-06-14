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

const SidebarButton = styled("button")`
  ${(props) => css`
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: flex;
    position: relative;
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
    
    /* this is the SidebarButtonTooltip */
    &:hover div {
      visibility: visible;
    }
  `}
`;

const SidebarButtonTooltip = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._200};
    border-color: ${props.theme.colors.black._400};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    left: calc(100% + 8px);
    padding: 6px 8px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    visibility: hidden;
  `}
`;

const SidebarButtonsWrapper = styled("div")`
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

const SidebarStyles = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-right-color: ${props.theme.colors.black._200};
    border-right-style: solid;
    border-right-width: ${props.theme.components.appLayout.sidebar.border.width};
    height: 100%;
    position: relative;
  `}
`;

export const Styles = {
  BottomContentStyles,
  SidebarButton,
  SidebarButtonTooltip,
  SidebarButtonsWrapper,
  SidebarStyles,
};
