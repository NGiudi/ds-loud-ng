import React from "react";

/* components */
import { Pagination, ThemeDS } from "../../..";

const story = {
  title: "Molecules/Pagination",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    argTypes: {
      nButtons: {
        control: { type: "number" },
        description:
          "Cantidad de botones que forman la barra de paginado. No incluye los botones de avanzar y retroceder.",
      },
      margin: {
        control: { type: "text" },
        description: "Se setea la distancia de los margenes.",
      },
      onChange: {
        control: { type: "none" },
        description: "Función que se ejecuta al cambiar de página.",
      },
      page: {
        control: { type: "number" },
        description: "Número de la página actual.",
      },
      pages: {
        control: { type: "number" },
        description: "Cantidad total de páginas.",
      },
    },
  },
};

export const SizesExamples = () => {
  return (
    <ThemeDS>
      <Pagination margin="t-10 x-20" pages={20} />

      <Pagination margin="t-10 x-20" pages={20} nButtons={8} />

      <Pagination margin="t-10 x-20" pages={20} nButtons={7} />

      <Pagination margin="t-10 x-20" pages={20} nButtons={6} />

      <Pagination margin="t-10 x-20" pages={20} nButtons={5} />
    </ThemeDS>
  );
};

export const ShortPagination = () => {
  return (
    <ThemeDS>
      <Pagination margin="t-10 x-20" pages={5} />
    </ThemeDS>
  );
};

export default story;
