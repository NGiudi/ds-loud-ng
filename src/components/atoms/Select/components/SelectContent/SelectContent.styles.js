import styled, { css } from "styled-components";

const SelectPanel = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    margin-top: 4px;
    max-height: ${props.$maxHeight};
    overflow: auto;
    padding: 4px 0;
    position: absolute;
    top: 30px;
    z-index: 50;
    width: 100%;

    &::-webkit-scrollbar {
      width: 6px;
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
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    display: flex;
    height: 30px;
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
