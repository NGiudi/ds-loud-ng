import { pick } from "../../../../utils/objects/object";

/* start - wrapper filter */
const whtWrapperOptions = ["margin", "size"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  return pick(props, whtWrapperOptions);
};
/* end - wrapper filter */

/* start - icon filter */
const whtListIconOptions = ["color", "icon", "spin"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getIconOptionsFilter = (props) => {
  return pick(props, whtListIconOptions);
};
/* end - wrapper filter */
