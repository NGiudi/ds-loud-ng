import React, { useContext } from "react";
import PropTypes from "prop-types";

/* context */
import { SelectContext } from "../../SelectContext";

/* components */
import { Icon, Text } from "../../../";

/* styles */
import { Styles } from "./SelectContent.styles";

/* utils */
import { disclosureIcon } from "../../../../../utils/icons/icons";

export const SelectContent = (props) => {
  const ctx = useContext(SelectContext);

  const handleClick = () => {
    if (ctx.isOpen) {
      ctx.closeSelect();
    } else {
      ctx.openSelect();
    }
  };

  return (
    <Styles.SelectWrapper>
      <Styles.SelectedOptionWrapper onClick={handleClick}>
        <Styles.SelectedOption>
          <Text margin="l-8">
            {ctx.selectedValue || "- Seleccione una opción -"}
          </Text>
        </Styles.SelectedOption>

        {/* disclosure icon */}
        <Icon icon={disclosureIcon(ctx.isOpen)} margin="r-8" size="sm" />
      </Styles.SelectedOptionWrapper>

      {/* panel */}
      {ctx.isOpen ? (
        <Styles.SelectPanel margin="t-8">{props.children}</Styles.SelectPanel>
      ) : null}
    </Styles.SelectWrapper>
  );
};

SelectContent.propTypes = {
  children: PropTypes.node,
};

SelectContent.defaultProps = {
  children: null,
};
