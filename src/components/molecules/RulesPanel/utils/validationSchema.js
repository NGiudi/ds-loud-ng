import * as Yup from "yup";

export const carSchema = Yup.object().shape({
  marca: Yup.string().required("Campo requerido"),
  modelo: Yup.string().required("Campo requerido"),
  patente: Yup.string().required("Campo requerido"),
});
