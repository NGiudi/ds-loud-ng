import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import context */
import { RulesPanelContext } from "../../RulesPanelContext";

/* import components */
import { IconButton, Panel } from "../../../../../";

/* import styles */
import { Styles } from "./RightPanel.styles";

/* import constants */
import { INVALID_INDEX } from "../../../../../assets/constants/array";

export const RightPanel = (props) => {
  const { list, listElement, onChange, panelLeftHeight } = props;

  const ctx = useContext(RulesPanelContext);

  const onClickEdit = (idx) => {
    ctx.setSelectedElement(idx);
  };

  const onClickDelete = (idx) => {
    list.splice(idx, 1);
    onChange && onChange(list);
  };

  const renderList = () => {
    if (list) {
      return list.map((el, idx) => {
        const isFirstItem = idx === 0;
        const isLastItem = idx === list.length - 1;

        return (
          <Styles.ContentContainer
            $isFirstItem={isFirstItem}
            $isLastItem={isLastItem}
            key={`rightPanel-listItem-${idx}`}
          >
            <div>{listElement && listElement(el.data)}</div>

            <Styles.ButtonsContainer>
              {el.isEditable && (
                <IconButton
                  disabled={ctx.selectedElement !== INVALID_INDEX}
                  icon={{ name: "pencil" }}
                  onClick={() => onClickEdit(idx)}
                />
              )}

              {el.isRemovable && (
                <IconButton
                  disabled={ctx.selectedElement === idx}
                  icon={{ name: "trash" }}
                  onClick={() => onClickDelete(idx)}
                />
              )}
            </Styles.ButtonsContainer>
          </Styles.ContentContainer>
        );
      });
    }

    return null;
  };

  return (
    <Panel
      padding="a-16"
      style={{
        boxSizing: "border-box",
        height: panelLeftHeight === -1 ? "auto" : `${panelLeftHeight}px`,
        overflowY: "scroll",
      }}
    >
      {renderList()}
    </Panel>
  );
};

RightPanel.propTypes = {
  list: PropTypes.array,
  listElement: PropTypes.func,
  onChange: PropTypes.func,
  panelLeftHeight: PropTypes.number,
};

RightPanel.defaultProps = {
  list: [],
  listElement: null,
  onChange: null,
  panelLeftHeight: -1,
};
