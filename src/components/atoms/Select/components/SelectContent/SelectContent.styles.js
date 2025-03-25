import styled from "styled-components";

import { TEXT_TYPES } from "../../../../../assets/styles/text";

const SearchInput = styled("input")`
  ${(props) => `  
    background-color: ${props.theme.colors.black._100};  
    border: none;
    flex-grow: 1;
    font-size: ${TEXT_TYPES.captionRegular.size};
    font-weight: ${TEXT_TYPES.captionRegular.weight};
    line-height: ${TEXT_TYPES.captionRegular.lineHeight};
    outline: none;
    padding-left: 4px;
  `};
`;

const SearchInputWrapper = styled("div")`
  ${(props) => `
    align-items: center;
    background-color: ${props.theme.colors.black._100};
    border-bottom-color: ${props.theme.colors.black._300};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 4px;
    padding: 6px 8px;
    position: sticky;
    top: 0;
    width: 100%;
  `};
`;

const SelectPanel = styled("div")`
  ${(props) => `
    background-color: ${props.theme.colors.black._100};
    border-color: ${props.theme.colors.black._400};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    margin-top: 4px;
    max-height: ${props.$maxHeight};
    overflow: auto;
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
  ${(props) => `
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
  SearchInput,
  SearchInputWrapper,
  SelectPanel,
  SelectedOption,
  SelectedOptionWrapper,
  SelectWrapper,
};