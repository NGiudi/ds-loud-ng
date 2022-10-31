import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import context */
import { RulesPanelContext } from "../../RulesPanelContext";

/* import components */
import { Button, Panel } from "../../../../../";

/* import styles */
import Styles from "./RightPanel.styles";

/* import constants */
import { INVALID_INDEX } from "../../../../../assets/constants/array";

const RightPanel = (props) => {
  const { list, listElement, onChange } = props;

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
        return (
          <Panel margin="b-10" key={`rightPanel-listItem-${idx}`}>
            <Styles.ContentContainer>
              <div>{listElement && listElement(el.data)}</div>

              <Styles.ButtonsContainer>
                {el.isEditable && (
                  <Button
                    disabled={ctx.selectedElement !== INVALID_INDEX}
                    icon={{ name: "pencil" }}
                    kind="icon"
                    onClick={() => onClickEdit(idx)}
                  />
                )}

                {el.isRemovable && (
                  <Button
                    disabled={ctx.selectedElement === idx}
                    icon={{ name: "trash" }}
                    kind="icon"
                    onClick={() => onClickDelete(idx)}
                  />
                )}
              </Styles.ButtonsContainer>
            </Styles.ContentContainer>
          </Panel>
        );
      });
    }

    return null;
  };

  return <Panel>{renderList()}</Panel>;
};

RightPanel.propTypes = {
  list: PropTypes.array,
  listElement: PropTypes.func,
  onChange: PropTypes.func,
};

RightPanel.defaultProps = {
  list: [],
  listElement: null,
  onChange: null,
};

export default RightPanel;
