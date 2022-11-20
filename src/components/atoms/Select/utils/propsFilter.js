import { pick } from "../../../../utils/objects/object";

/* start - select filter */
const whtListSelectOptions = ["name"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getSelectOptionsFilter = (props) => {
  return pick(props, whtListSelectOptions);
};
/* end - select filter */

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
