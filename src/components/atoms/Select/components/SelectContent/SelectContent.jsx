import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SelectContext } from "../../SelectContext";

import { Icon, SelectOption, Text } from "../../../";

import { Styles } from "./SelectContent.styles";

import { disclosureIcon } from "../../../../../utils/icons/icons";

const DEFAULT_PROPS = {
  disabled: false,
  maxHeight: "auto",
  onSearchInputChange: null,
};

export const SelectContent = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const ctx = useContext(SelectContext);

  const handleClick = () => {
    if (!attrs.disabled) {
      ctx.toogleSelect();
    }
  };

  return (
    <Styles.SelectWrapper>
      <Styles.SelectedOptionWrapper
        disabled={attrs.disabled}
        onClick={handleClick}
      >
        <Styles.SelectedOption>
          <Text margin="l-8">
            {ctx.selectedValue.display ||
              ctx.selectedValue.value ||
              "- Seleccione una opción -"}
          </Text>
        </Styles.SelectedOption>

        {/* disclosure icon */}
        <Icon icon={disclosureIcon(ctx.isOpen)} margin="r-8" size="sm" />
      </Styles.SelectedOptionWrapper>

      {/* panel */}
      {ctx.isOpen ? (
        <Styles.SelectPanel $margin="t-8" $maxHeight={attrs.maxHeight}>
          {!!attrs.onSearchInputChange && (
            <Styles.SearchInputWrapper>
              <Icon color="black_400" icon="search" size="avatar" />

              <Styles.SearchInput
                onChange={(e) => attrs.onSearchInputChange(e.target.value)}
                placeholder="Buscar"
              />
            </Styles.SearchInputWrapper>
          )}

          {ctx.options
            .filter((option) => !option.hide)
            .map((option) => (
              <SelectOption key={`option-${option.value}`} option={option}>
                {option.children}
              </SelectOption>
            ))}
        </Styles.SelectPanel>
      ) : null}
    </Styles.SelectWrapper>
  );
};

SelectContent.propTypes = {
  disabled: PropTypes.bool,
  maxHeight: PropTypes.string,
  onSearchInputChange: PropTypes.func,
};
