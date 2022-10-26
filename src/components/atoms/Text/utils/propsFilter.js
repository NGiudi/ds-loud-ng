import { pick } from "../../../../utils/objects/object";

/* start - textOptions filter */
const whtListTextOptions = [
  "children",
  "color",
  "margin",
  "padding",
  "size",
  "type",
  "underline",
  "weight",
];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getTextOptionsFilter = (props) => {
  return pick(props, whtListTextOptions);
};
/* end - textOptions filter */

/* start - labelOptions filter */
const whtListLabelOptions = ["htmlFor"];

export const getLabelOptionsFilter = (props) => {
  return pick(props, whtListLabelOptions);
};
/* end - labelOptions filter */
