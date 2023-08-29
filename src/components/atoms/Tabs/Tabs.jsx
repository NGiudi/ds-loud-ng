import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Text } from "../../../";

import { Styles } from "./Tabs.styles";

export const Tabs = (props) => {
  const { children, margin, name, padding } = props;

  const [tabsName, setTabsName] = useState([]);
  const [posTabSelected, setPosTabSelected] = useState(0);

  useEffect(() => {
    children.forEach((elm, idx) => {
      setTabsName((prev) => [...prev, elm.props.name]);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleBtnClick = (e) => {
    const tabIdx = tabsName.indexOf(e.target.innerText);
    setPosTabSelected(tabIdx);
  };

  return (
    <Styles.Wrapper $margin={margin} $padding={padding}>
      <Styles.TabsBar>
        {tabsName.map((tabName, idx) => {
          return (
            <Styles.TabButton
              key={`${name}_tab_${idx}`}
              id={tabName}
              $isSelected={idx === posTabSelected}
              onClick={handleBtnClick}
              value={tabName}
            >
              <Text weight="semibold">{tabName}</Text>
            </Styles.TabButton>
          );
        })}
      </Styles.TabsBar>

      <Styles.TabContent>{children[posTabSelected]}</Styles.TabContent>
    </Styles.Wrapper>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  name: PropTypes.string,
  padding: PropTypes.string,
};

Tabs.defaultProps = {
  children: null,
  margin: "a-0",
  name: "",
  padding: "a-0",
};
