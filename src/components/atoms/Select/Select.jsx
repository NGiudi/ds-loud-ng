import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon, Text } from "../../../";

/* import styles */
import { Styles } from "./Select.styles.js";

/* import utils */
import { disclosureIcon } from "../../../utils/icons/icons";
import {
  getSelectOptionsFilter,
  getWrapperOptionsFilter,
} from "./utils/propsFilter";

export const Select = (props) => {
  const { icon, label } = props;

  const selectOptions = getSelectOptionsFilter(props);
  const wrapperOptions = getWrapperOptionsFilter(props);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <Styles.Wrapper>
      {/* label */}
      {!!label && (
        <Text
          as="label"
          htmlFor={props.name}
          margin="b-4"
          size="sm"
          weight="semibold"
        >
          {label}
        </Text>
      )}

      <Styles.SelectWrapper {...wrapperOptions}>
        <Styles.SelectedOptionWrapper onClick={handleClick} {...selectOptions}>
          {/* left icon */}
          {!!icon && <Icon icon={icon} margin="r-8" size="sm" />}

          <Styles.SelectedOption>
            <Text margin="l-8">asd</Text>
          </Styles.SelectedOption>

          {/* disclosure icon */}
          <Icon icon={disclosureIcon(isOpen)} margin="r-8" size="sm" />
        </Styles.SelectedOptionWrapper>

        {/* panel */}
        {isOpen ? (
          <Styles.SelectPanel margin="t-8">Pruebaaaa</Styles.SelectPanel>
        ) : null}
      </Styles.SelectWrapper>
    </Styles.Wrapper>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  margin: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  icon: null,
  label: "",
  name: "",
  margin: "",
};
