import React, { useState } from "react";

import { RulesPanel, Text, ThemeDS } from "../../../";

import { carSchema } from "./utils/validationSchema";

import { fields, rules } from "../../../constants/stories/RulesPanel";

const story = {
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
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
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

export default story;
