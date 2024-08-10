import styled, { css } from "styled-components";

import { paddingProperties } from "../../../../../utils/styles";

import {
  APP_LAYOUT_BOTTOM_HEIGHT,
  APP_LAYOUT_BORDER_WIDTH,
  APP_LAYOUT_BOTTOM_CONTENT_PADDING,
  APP_LAYOUT_BUTTON_X_PADDING,
} from "../../../../../assets/styles/app_layout";

const BottomContentStyles = styled("div")`
  ${(props) => css`
    border-top-color: ${props.theme.colors.black._200};
    border-top-style: solid;
    border-top-width: ${APP_LAYOUT_BORDER_WIDTH}px;

    ${paddingProperties(props, `y-${APP_LAYOUT_BOTTOM_CONTENT_PADDING}`)}
  `}
`;

const SidebarButton = styled("button")`
  ${(props) => css`
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: flex;
    position: relative;
    width: ${props.$isExpanded ? "240px" : "56px"};

    ${paddingProperties(props, `l-18 y-${APP_LAYOUT_BUTTON_X_PADDING}`)}

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
    background-color: ${props.theme.colors.black._200}E0;
    border-color: ${props.theme.colors.black._300};
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
    height: calc(100% - ${APP_LAYOUT_BOTTOM_HEIGHT}px);

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: 4px;
    }
  `}
`;

const SidebarStyles = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-right-color: ${props.theme.colors.black._200};
    border-right-style: solid;
    border-right-width: 1px;
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
