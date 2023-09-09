import styled, { css } from "styled-components";

const SelectPanel = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.select.border.radius};
    border-style: solid;
    border-width: ${props.theme.components.select.border.width};
    box-sizing: border-box;
    margin-top: ${props.theme.components.select.panel.margin.top};
    max-height: ${props.$maxHeight};
    overflow: auto;
    padding: ${props.theme.components.select.panel.padding};
    position: absolute;
    top: ${props.theme.components.select.height};
    z-index: 50;
    width: 100%;

    &::-webkit-scrollbar {
      width: ${props.theme.components.select.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._300};
    }
  `};
`;

const SelectedOption = styled("div")`
  flex-grow: 1;
`;

const SelectedOptionWrapper = styled("div")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.select.border.radius};
    border-style: solid;
    border-width: ${props.theme.components.select.border.width};
    box-sizing: border-box;
    display: flex;
    height: ${props.theme.components.select.height};
    opacity: ${props.disabled && "0.5"};
    width: 100%;
  `};
`;

const SelectWrapper = styled("div")`
  position: relative;
  width: 100%;
`;

export const Styles = {
  SelectPanel,
  SelectedOption,
  SelectedOptionWrapper,
  SelectWrapper,
};
