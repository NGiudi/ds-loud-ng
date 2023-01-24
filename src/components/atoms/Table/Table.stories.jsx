import React from "react";

import { Table, Text, ThemeDS } from "../../../";

const story = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
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
  columns: [
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
      content: (data) => <Text>{data.status}</Text>,
      label: "Estado",
      width: "10%",
    },
    {
      content: (data) => <Text>{data.address}</Text>,
      label: "Dirección",
    },
  ],
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
};

export default story;
