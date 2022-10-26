import { pick } from "../../../../utils/objects/object";

/* start - placeholder filter */
const whtListImageOptions = ["alt", "margin", "size", "theme", "type"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getImageOptionsFilter = (props) => {
  return pick(props, whtListImageOptions);
};
/* end - placeholder filter */

/* start - placeholder filter */
const whtListPlaceholderOptions = ["placeholder", "size", "theme", "type"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getPlaceholderOptionsFilter = (props) => {
  return pick(props, whtListPlaceholderOptions);
};
/* end - placeholder filter */
