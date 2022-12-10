import { pick } from "../../../../utils/objects/object";

/* start - wrapper filter */
const whtListWrapperOptions = ["margin"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  return pick(props, whtListWrapperOptions);
};
/* end - wrapper filter */

/* start - input filter */
const whtListInputOptions = [
  "autoComplete",
  "autofocus",
  "disabled",
  "innerRef",
  "name",
  "onKeyPress",
  "placeholder",
  "readOnly",
  "value",
];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getInputOptionsFilter = (props) => {
  return pick(props, whtListInputOptions);
};
/* end - input filter */
