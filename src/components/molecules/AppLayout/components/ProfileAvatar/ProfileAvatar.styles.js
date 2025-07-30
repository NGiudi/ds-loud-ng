import styled, { css } from "styled-components";

const AvatarWrapper = styled("div")`
  ${(props) => css`
    
    border-color: ${props.$isSelected
      ? `${props.theme.colors.black._500}`
      : "transparent"};
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    
    &:hover {
      border-color: ${!props.$isSelected && props.theme.colors.black._600};
    }
  `}
`;

const PanelWrapper = styled("div")`
  margin-top: 8px;
  position: absolute;
  right: 0;
  top: 100%;
  width: 250px;
`;

const Wrapper = styled("div")`
  display: inline-block;
  position: relative;
  width: fit-content;
`;

export const Styles = {
  AvatarWrapper,
  PanelWrapper,
  Wrapper,
};