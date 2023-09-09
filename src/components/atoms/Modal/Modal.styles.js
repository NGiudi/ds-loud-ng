import styled, { css } from "styled-components";

import { paddingProperties } from "../../../utils/styles/spacing";

const ButtonsWrapper = styled("div")`
  text-align: right;
`;

const CloseBtnWrapper = styled("div")`
  ${(props) => css`
    position: absolute;
    right: ${props.theme.components.modal.closeButton.position.right};
    top: ${props.theme.components.modal.closeButton.position.top};
  `}
`;

const ContentBox = styled("div")`
  ${(props) => css`
    padding: ${paddingProperties(props)};
  `}
`;

const Overlay = styled("div")`
  align-items: center;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.35); //TODO: agregar color al theme.
  display: flex;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const PanelWrapper = styled("div")`
  ${(props) => css`
    margin: auto;
    max-width: ${props.width};
    padding: ${paddingProperties(
      props,
      props.theme.components.modal.panel.padding,
    )};
    width: 100%;
  `}
`;

export const Styles = {
  ButtonsWrapper,
  CloseBtnWrapper,
  ContentBox,
  Overlay,
  PanelWrapper,
};
