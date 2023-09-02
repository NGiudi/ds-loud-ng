import styled, { css } from "styled-components";

const SelectPanel = styled.div`
  border-style: solid;
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
  z-index: 50;
  width: 100%;

  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.select.border.radius};
    border-width: ${props.theme.components.select.border.width};
    margin-top: ${props.theme.components.select.panel.margin.top};
    max-height: ${props.$maxHeight};
    padding: ${props.theme.components.select.panel.padding};
    top: ${props.theme.components.select.height};

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

const SelectedOption = styled.div`
  flex-grow: 1;
`;

const SelectedOptionWrapper = styled.div`
  align-items: center;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: ${props.theme.components.select.border.radius};
    border-width: ${props.theme.components.select.border.width};
    height: ${props.theme.components.select.height};
    opacity: ${props.disabled && "0.5"};
  `};
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Styles = {
  SelectPanel,
  SelectedOption,
  SelectedOptionWrapper,
  SelectWrapper,
};
