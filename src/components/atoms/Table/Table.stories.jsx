import React from "react";

import { Table, Text, ThemeDS } from "../../../";

const meta = {
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
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    mobileColumns: {
      control: { type: "none" },
      description:
        "Array de columnas para pantallas más chicas. Caso no exista se usa las columnas pasadas en columns.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre del atributo. Equivalente al atributo name de html.",
    },
    onClick: {
      control: { type: "none" },
      description:
        "Función que se ejecuta al hacer click sobre una de las columnas de la tabla.",
    },
  },
  component: Table,
  parameters: {
    status: {
      type: "stable",
    },
  },
  tags: ["autodocs"],
  title: "Components/Table",
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
      name: "Juan",
      last_name: "Pérez",
      email: "juan.perez@example.com",
      phone: "+5491111111111",
      status: "active",
      address: "Calle Falsa 123",
    },
    {
      name: "María",
      last_name: "Gómez",
      email: "maria.gomez@example.com",
      phone: "+5491122222222",
      status: "inactive",
      address: "Avenida Siempreviva 742",
    },
    {
      name: "Carlos",
      last_name: "López",
      email: "carlos.lopez@example.com",
      phone: "+5491133333333",
      status: "active",
      address: "Boulevard Central 456",
    },
    {
      name: "Ana",
      last_name: "Martínez",
      email: "ana.martinez@example.com",
      phone: "+5491144444444",
      status: "inactive",
      address: "Pasaje del Sol 789",
    },
    {
      name: "Luis",
      last_name: "Fernández",
      email: "luis.fernandez@example.com",
      phone: "+5491155555555",
      status: "active",
      address: "Calle Luna 321",
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
          <Text type="bodySemibold">Nombre</Text>
          <Text margin="y-10">{`${data.name} ${data.last_name}`}</Text>
        </>
      ),
    },
    {
      content: (data) => (
        <>
          <div style={{ display: "inline-block", width: "50%" }}>
            <Text type="bodySemibold">Email</Text>
            <Text>{data.email}</Text>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <Text type="bodySemibold">Teléfono</Text>
            <Text>{data.phone}</Text>
          </div>
        </>
      ),
    },
    {
      content: (data) => (
        <>
          <div style={{ display: "inline-block", width: "50%" }}>
            <Text type="bodySemibold">Dirección</Text>
            <Text>{data.address}</Text>
          </div>

          <div style={{ display: "inline-block", width: "50%" }}>
            <Text type="bodySemibold">Estado</Text>
            <Text>{data.status}</Text>
          </div>
        </>
      ),
    },
  ],
  onClick: (data) => alert(`Clicked on ${data.name} ${data.last_name}`),
};

export default meta;