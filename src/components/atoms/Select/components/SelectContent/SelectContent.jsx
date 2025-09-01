import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SelectContext } from "../../SelectContext";

import { Icon, SelectOption, Text } from "../../../";

import { Styles } from "./SelectContent.styles";

import { disclosureIcon } from "../../../../../utils/icons/icons";

const DEFAULT_PROPS = {
  disabled: false,
  isLoading: false,
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
    if (!attrs.disabled && !attrs.isLoading) {
      ctx.toogleSelect();
    }
  };

  return (
    <Styles.SelectWrapper>
      <Styles.SelectedOptionWrapper
        disabled={attrs.disabled || attrs.isLoading}
        onClick={handleClick}
      >
        <Styles.SelectedOption>
          <Text margin="l-8">
            {ctx.selectedValue.display || "- Seleccione una opción -"}
          </Text>
        </Styles.SelectedOption>

        <Icon
          icon={attrs.isLoading ? "spinner" : disclosureIcon(ctx.isOpen)}
          margin="r-8"
          size="sm"
          spin={attrs.isLoading}
        />
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
  isLoading: PropTypes.bool,
  maxHeight: PropTypes.string,
  onSearchInputChange: PropTypes.func,
};