import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const TabsBar = styled("div")`
  ${(props) => css`
    border-bottom-color: ${props.theme.colors.black._200};
    border-bottom-style: solid;
    border-bottom-width: ${props.theme.components.tabs.bar.border.width};

    ${paddingProperties(props, props.theme.components.tabs.bar.padding)}
  `};
`;

const TabButton = styled("div")`
  ${(props) => css`
    background-color: transparent;
    border: none;
    border-bottom-color: ${props.$isSelected
      ? props.theme.colors.orange._600
      : "transparent"};
    border-bottom-style: solid;
    border-bottom-width: ${props.theme.components.tabs.button.border.width};

    ${paddingProperties(props, props.theme.components.tabs.button.padding)}

    &:hover {
      border-bottom-color: ${props.theme.colors.orange._300};
    }
  `};
`;

const TabContent = styled("div")`
  ${(props) => css`
    ${paddingProperties(props, "a-20")}
  `};
`;

const Wrapper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
    ${paddingProperties(props)}
  `};
`;

export const Styles = {
  TabsBar,
  TabButton,
  TabContent,
  Wrapper,
};
