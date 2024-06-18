import styled, { css } from "styled-components";

const FileInput = styled("input")`
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  opacity: 0;
  top: 0;
  width: 100%;
`;

const UploadFileBox = styled("div")`
  ${(props) => css`
    border-color: ${props.theme.colors.black._300};
    border-radius: 4px;
    border-style: dashed;
    border-width: 2px;
    box-sizing: border-box;
    padding: 20px 0;
    position: relative;
    text-align: center;
    width: 100%;
  `}
`;

export const Styles = {
  FileInput,
  UploadFileBox,
};