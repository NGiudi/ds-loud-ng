import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    css`
      align-items: ${props.vAlign};
      justify-content: ${props.hAlign};

      ${marginProperties(props)}
    `}
`;

const Styles = {
  Wrapper,
};

export default Styles;
