import styled, { css } from "styled-components";

const ButtonsWrapper = styled.div`
  text-align: right;
`;

const CloseBtnWrapper = styled.div`
  position: absolute;

  ${(props) =>
    css`
      right: ${props.theme.components.modal.closeButton.position.right};
      top: ${props.theme.components.modal.closeButton.position.top};
    `}
`;

const Overlay = styled.div`
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

const PanelWrapper = styled.div`
  margin: auto;
  width: 100%;

  ${(props) =>
    css`
      max-width: ${props.width};
      padding: 0 ${props.theme.components.modal.panel.marginX};
    `}
`;

export const Styles = {
  ButtonsWrapper,
  CloseBtnWrapper,
  Overlay,
  PanelWrapper,
};
