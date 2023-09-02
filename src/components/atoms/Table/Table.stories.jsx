import React from "react";

import { Table, Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: { type: "none" },
      description:
        "Se usa en lugar de desktopColums y mobileColumns y es para todas las dimensiones.",
    },
    data: {
      control: { type: "none" },
      description: "Array de objectos que compone las filas de la tabla.",
    },
    desktopColumns: {
      control: { type: "none" },
      description:
        "Array de columnas para pantallas más grandes. Caso no exista se usa las columnas pasadas en columns.",
    },
    margin: {
      control: { type: "string" },
      description: "Se setea la distancia de los margenes.",
    },
    mobileColumns: {
      control: { type: "none" },
      description:
        "Array de columnas para pantallas más chicas. Caso no exista se usa las columnas pasadas en columns.",
    },
    name: {
      control: { type: "string" },
      description: "Nombre del atributo. Equivalente al atributo name de html.",
    },
    onClick: {
      control: { type: "none" },
      description:
        "Función que se ejecuta al hacer click sobre una de las columnas de la tabla.",
    },
  },
};

export const DinamicExample = (args) => {
  return (
    <ThemeDS>
      <Table {...args} />
    </ThemeDS>
  );
};

DinamicExample.args = {
  data: [
    {
      name: "Nicolás",
      last_name: "Giudice",
      email: "nicolas.m.giudice@gmail.com",
      phone: "+5491167946707",
      status: "active",
      address: "false 123",
    },
    {
      name: "Gustavo",
      last_name: "Giudice",
      email: "gustavo.giudice@gmail.com",
      phone: "+5491167946707",
      status: "active",
      address: "false 123",
    },
    {
      name: "Florencia",
      last_name: "Giudice",
      email: "florencia.giudice@gmail.com",
      phone: "+5491167946707",
      status: "inactive",
      address: "false 123",
    },
  ],
  desktopColumns: [
    {
      content: (data) => (
        <Text margin="y-10">{`${data.name} ${data.last_name}`}</Text>
      ),
      label: "Nombre",
      width: "15%",
    },
    {
      content: (data) => <Text>{data.email}</Text>,
      label: "Email",
      width: "25%",
    },
    {
      content: (data) => <Text>{data.phone}</Text>,
      label: "Teléfono",
      width: "15%",
    },
    {
      content: (data) => <Text>{data.address}</Text>,
      label: "Dirección",
      width: "20%",
    },
    {
      content: (data) => <Text>{data.status}</Text>,
      label: "Estado",
      width: "10%",
    },
  ],
  mobileColumns: [
    {
      content: (data) => (
        <>
          <Text weight="semibold">Nombre</Text>
          <Text margin="y-10">{`${data.name} ${data.last_name}`}</Text>
        </>
      ),
    },
    {
      content: (data) => (
        <>
          <div style={{ display: "inline-block", width: "50%" }}>
            <Text weight="semibold">Email</Text>
            <Text>{data.email}</Text>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <Text weight="semibold">Teléfono</Text>
            <Text>{data.phone}</Text>
          </div>
        </>
      ),
    },
    {
      content: (data) => (
        <>
          <div style={{ display: "inline-block", width: "50%" }}>
            <Text weight="semibold">Dirección</Text>
            <Text>{data.address}</Text>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <Text weight="semibold">Estado</Text>
            <Text>{data.status}</Text>
          </div>
        </>
      ),
    },
  ],
};

export default story;
