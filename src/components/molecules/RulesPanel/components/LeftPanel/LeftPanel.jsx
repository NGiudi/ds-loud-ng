import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import context */
import { RulesPanelContext } from "../../RulesPanelContext";

/* import components */
import { FieldsGroup } from "../FieldsGroup/FieldsGroup";
import { Button, Panel } from "../../../../../";

/* import external components */
import { Form, Formik } from "formik";

/* styles */
import { Styles } from "./LeftPanel.styles";

/* import constants */
import { INVALID_INDEX } from "../../../../../assets/constants/array";

export const LeftPanel = (props) => {
  const { fields, list, onChange, onSizeH, validationSchema } = props;

  const ctx = useContext(RulesPanelContext);

  const onSubmit = (values) => {
    if (ctx.selectedElement === INVALID_INDEX) {
      //? add element.
      const newItem = {
        data: values,
        isEditable: true,
        isRemovable: true,
      };

      list.push(newItem);
    } else {
      //? edit element.
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

  const handleHeight = (height) => {
    onSizeH && onSizeH(height);
  };

  return (
    <Panel onSizeH={handleHeight} padding="a-16">
      <Formik
        enableReinitialize
        initialValues={generateInicialValues()}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FieldsGroup fields={fields} />

          <Styles.ButtonsGroup margin="t-20">
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
          </Styles.ButtonsGroup>
        </Form>
      </Formik>
    </Panel>
  );
};

LeftPanel.propTypes = {
  fields: PropTypes.array,
  list: PropTypes.array,
  onChange: PropTypes.func,
  onSizeH: PropTypes.func,
  validationSchema: PropTypes.object,
};

LeftPanel.defaultProps = {
  fields: [],
  list: [],
  onChange: null,
  onSizeH: null,
  validationSchema: null,
};
