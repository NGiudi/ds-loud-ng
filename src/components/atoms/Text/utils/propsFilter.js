import { pick } from "../../../../utils/objects/object";

/* start - barOptions filter */
const whtListTextOptions = [
  "children",
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
/* end - barOptions filter */
