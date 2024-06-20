import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Text } from "../../../";

import { Styles } from "./Tabs.styles";


const defaultProps = {
  children: null,
  margin: "a-0",
  name: "",
  padding: "a-0",
};

export const Tabs = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };
  
  const [tabsName, setTabsName] = useState([]);
  const [posTabSelected, setPosTabSelected] = useState(0);

  useEffect(() => {
    attrs.children.forEach((elm) => {
      setTabsName((prev) => [...prev, elm.props.name]);
    });
  }, []); // eslint-disable-line

  const handleBtnClick = (e) => {
    const tabIdx = tabsName.indexOf(e.target.innerText);
    setPosTabSelected(tabIdx);
  };

  return (
    <Styles.Wrapper $margin={attrs.margin} $padding={attrs.padding}>
      <Styles.TabsBar>
        {tabsName.map((tabName, idx) => {
          return (
            <Styles.TabButton
              key={`${attrs.name}_tab_${idx}`}
              id={tabName}
              $isSelected={idx === posTabSelected}
              onClick={handleBtnClick}
              value={tabName}
            >
              <Text type="bodySemibold">{tabName}</Text>
            </Styles.TabButton>
          );
        })}
      </Styles.TabsBar>

      <Styles.TabContent>{attrs.children[posTabSelected]}</Styles.TabContent>
    </Styles.Wrapper>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  name: PropTypes.string,
  padding: PropTypes.string,
};
