import React, { useState } from "react";

import { RulesPanel, Text, ThemeDS } from "../../../";

const story = {
  title: "Components/RulesPanel",
  component: RulesPanel,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
  },
};

const fields = [
  {
    label: "Marca",
    name: "marca",
  },
  {
    label: "Modelo",
    name: "modelo",
  },
];

const elements = [
  {
    data: {
      marca: "Volkswagen",
      modelo: "fox",
    },
    isEditable: true,
    isRemovable: false,
  },
  {
    data: {
      marca: "Volkswagen",
      modelo: "gol",
    },
    isEditable: true,
    isRemovable: true,
  },
  {
    data: {
      marca: "Audi",
      modelo: "S3",
    },
    isEditable: false,
    isRemovable: true,
  },
];

export const DinamicExample = () => {
  const [listTest, setListTest] = useState(elements);

  const renderElemContent = (el) => {
    return (
      <>
        <Text weight="semibold">{el.marca}</Text>
        <Text size="md">{el.modelo}</Text>
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
      />
    </ThemeDS>
  );
};

export default story;
