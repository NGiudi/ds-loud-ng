import styled, { css } from "styled-components";

const FileItem = styled("div")`
  ${(props) => css`
    align-items: center;
    border-color: ${props.theme.colors.black._300};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    box-shadow: inset 4px 0 0 0
      ${props.theme.colors.alert.colors[props.$status]};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props.$isLastItem ? "0px" : "16px"};
    padding: 12px;
    position: relative;
    text-align: center;
    width: 100%;
  `}
`;

export const Styles = {
  FileItem,
};