import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/* components */
import { Icon } from "../../../";

/* styles */
import { Styles } from "./CheckList.styles";

/* utils */
import { getWrapperOptionsFilter } from "./utils/propsFilter";

export const CheckList = (props) => {
  const { children, clickable } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  const [arrayClickedProp, setArrayClickedProp] = useState(() => {
    if (!children) return [];

    let array = [];

    children.forEach((elem, index) => {
      array[index] = elem?.props?.checked || false;
    });

    return array;
  });

  const handleItemClick = (index) => {
    if (clickable) {
      setArrayClickedProp((prevValue) => {
        const newArray = prevValue.slice();
        newArray[index] = !prevValue[index];
        return newArray;
      });
    }
  };

  /* check if change checked value. */
  useEffect(() => {
    const index = children.findIndex(
      (el, idx) =>
        el.props.checked && arrayClickedProp[idx] !== el.props.checked
    );

    if (index !== -1) {
      setArrayClickedProp((prevValue) => {
        const newArray = [...prevValue];
        newArray[index] = !newArray[index];
        console.log(newArray);
        return newArray;
      });
    }
  }, [children]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styles.Wrapper {...wrapperOptions}>
      {children.map((item, index) => {
        if (!item) return null;

        return (
          <Styles.ItemWrapper key={`item-${index}`}>
            <Styles.ListItem
              checked={arrayClickedProp[index]}
              onClick={() => handleItemClick(index)}
            >
              <Icon
                icon={arrayClickedProp[index] ? "check" : "times"}
                margin="r-5 y-3"
                size="sm"
              />

              {item}
            </Styles.ListItem>
          </Styles.ItemWrapper>
        );
      })}
    </Styles.Wrapper>
  );
};

CheckList.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  margin: PropTypes.string,
};

CheckList.defaultProps = {
  children: null,
  clickable: false,
  margin: "a-0",
};