import React, { useState } from "react";

import { RulesPanel, Text, ThemeDS } from "../../../";

import { carSchema } from "./utils/validationSchema";

import { fields, rules } from "../../../constants/stories/RulesPanel";

const meta = {
  title: "Molecules/RulesPanel",
  component: RulesPanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    fields: {
      control: { type: "none" },
      description: "Listado de inputs que van en el panel de la izquierda.",
    },
    list: {
      control: { type: "none" },
      description: "Listado de elementos que van en la tabla de la derecha.",
    },
    listElement: {
      control: { type: "none" },
      description:
        "Componente con la estructura de los elementos de la derecha.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    onChange: {
      control: { type: "none" },
      description:
        "Método que se ejecuta cuando cambia el listado de elementos.",
    },
    validationSchema: {
      control: { type: "none" },
      description:
        "Schema de validación para el formulario del panel de la izquierda.",
    },
  },
};

export const DinamicExample = () => {
  const [listTest, setListTest] = useState(rules);

  const renderElemContent = (el) => {
    return (
      <>
        <Text weight="semibold">{el.marca}</Text>

        <Text size="md">
          {el.modelo} - {el.patente}
        </Text>
      </>
    );
  };

  return (
    <ThemeDS>
      <RulesPanel
        fields={fields}
        list={listTest}
        listElement={renderElemContent}
        margin="a-10"
        onChange={(list) => setListTest([...list])}
        validationSchema={carSchema}
      />
    </ThemeDS>
  );
};

export default meta;
