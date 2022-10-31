import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import context */
import { RulesPanelContext } from "../../RulesPanelContext";

/* import components */
import { Button, Input, Panel } from "../../../../../";

/* import external components */
import { Form, Formik } from "formik";

/* import constants */
import { INVALID_INDEX } from "../../../../../assets/constants/array";

const LeftPanel = (props) => {
  const { fields, list, onChange } = props;

  const ctx = useContext(RulesPanelContext);

  const onSubmit = (values) => {
    if (ctx.selectedElement === INVALID_INDEX) {
      // add element.
      const newItem = {
        data: values,
        isEditable: true,
        isRemovable: true,
      };

      list.push(newItem);
    } else {
      // edit element.
      list[ctx.selectedElement].data = values;
      ctx.setSelectedElement(INVALID_INDEX);
    }

    onChange && onChange(list);
  };

  const generateInicialValues = () => {
    const initialValues = {};

    fields.forEach((field) => {
      const { name } = field;

      if (ctx.selectedElement === INVALID_INDEX) {
        initialValues[name] = "";
      } else {
        initialValues[name] = list[ctx.selectedElement].data[name];
      }
    });

    return initialValues;
  };

  const renderInputs = () => {
    return fields.map((field) => {
      const { label, name } = field;

      return (
        <Input
          key={`rulesPanel_input_${name}`}
          label={label}
          margin="b-12"
          name={name}
        />
      );
    });
  };

  return (
    <Panel>
      <Formik
        enableReinitialize
        initialValues={generateInicialValues()}
        onSubmit={onSubmit}
      >
        <Form>
          {renderInputs && renderInputs()}

          <div style={{ textAlign: "end" }}>
            <Button
              disabled={ctx.selectedElement === INVALID_INDEX}
              kind="outlined"
              margin="r-8"
              onClick={() => ctx.setSelectedElement(INVALID_INDEX)}
            >
              Cancelar
            </Button>

            <Button type="submit">
              {ctx.selectedElement === INVALID_INDEX ? "Agregar" : "Editar"}
            </Button>
          </div>
        </Form>
      </Formik>
    </Panel>
  );
};

LeftPanel.propTypes = {
  fields: PropTypes.array,
  list: PropTypes.array,
  onChange: PropTypes.func,
};

LeftPanel.defaultProps = {
  fields: [],
  list: [],
  onChange: null,
};

export default LeftPanel;
