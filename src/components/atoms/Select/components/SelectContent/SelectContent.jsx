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
import { getPanelOptionsFilter } from "../../utils/propsFilter";

export const SelectContent = (props) => {
  const { disabled } = props;
 
  const ctx = useContext(SelectContext);

  const panelOptions = getPanelOptionsFilter(props);

  const handleClick = () => {
    if (!disabled) {
      ctx.toogleSelect();
    }
  };

  return (
    <Styles.SelectWrapper>
      <Styles.SelectedOptionWrapper disabled={disabled} onClick={handleClick}>
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
        <Styles.SelectPanel margin="t-8" {...panelOptions}>
          {props.children}
        </Styles.SelectPanel>
      ) : null}
    </Styles.SelectWrapper>
  );
};

SelectContent.propTypes = {
  children: PropTypes.node,
  maxHeight: PropTypes.string,
};

SelectContent.defaultProps = {
  children: null,
  maxHeight: "auto",
};
