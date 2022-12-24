export const fields = [
  {
    label: "Marca",
    name: "marca",
    // options: ["audi", "lexus", "volkswagen"], //TODO: descomentar
    type: "text", //TODO: usar select,
  },
  {
    label: "Modelo",
    name: "modelo",
    type: "text",
  },
  {
    label: "Patente",
    name: "patente",
    type: "text",
  },
];

export const rules = [
  {
    data: {
      marca: "Volkswagen",
      modelo: "fox",
      patente: "KZH614",
    },
    isEditable: true,
    isRemovable: false,
  },
  {
    data: {
      marca: "Volkswagen",
      modelo: "gol",
      patente: "FDB312",
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
