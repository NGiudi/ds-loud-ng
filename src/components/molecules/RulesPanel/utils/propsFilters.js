import { pick } from "../../../../utils/objects/object";

/* start - context filter */
const whtListContextOptions = ["list"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getContextOptions = (props) => {
  return pick(props, whtListContextOptions);
};
/* end - context filter */

/* start - left panel filter */
const whtListLeftPanelOptions = [
  "fields",
  "list",
  "onChange",
  "validationSchema",
];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getLeftPanelOptions = (props) => {
  return pick(props, whtListLeftPanelOptions);
};
/* end - left panel filter */

/* start - right panel filter */
const whtListRightPanelOptions = ["listElement", "list", "onChange"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getRightPanelFilter = (props) => {
  return pick(props, whtListRightPanelOptions);
};
/* end - right panel filter */

/* start - wrapper filter */
const whtListWrapperOptions = ["margin"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperFilter = (props) => {
  return pick(props, whtListWrapperOptions);
};
/* end - wrapper filter */
