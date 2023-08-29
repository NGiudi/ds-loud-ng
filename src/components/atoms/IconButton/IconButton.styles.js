import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const IconButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  height: 38px;
  justify-content: center;
  width: 38px;

  ${(props) =>
    css`
      ${marginProperties(props)}

      &:hover:enabled {
        background-color: ${props.theme.colors.black._200};
      }
      
      &:active:enabled {
        background-color: ${!props.loading && props.theme.colors.black._300};
      }
    
      &:disabled {
        border-color: ${props.theme.colors.black._400};
        box-shadow: none;
        color: ${props.theme.colors.black._400};
      }
    `}
`;

export const Styles = {
  IconButton,
};
