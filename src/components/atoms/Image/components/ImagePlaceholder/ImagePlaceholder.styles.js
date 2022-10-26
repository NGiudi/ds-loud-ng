import styled, { css } from "styled-components";

const IconPlaceholder = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.orange._700};
      border-radius: ${props.type === "round" ? "50%" : "0px"};
      height: ${props.theme.components.image.height[props.type][props.size]};
      width: ${props.theme.components.image.width[props.type][props.size]};
    `};
`;

const Styles = {
  IconPlaceholder,
};

export default Styles;
