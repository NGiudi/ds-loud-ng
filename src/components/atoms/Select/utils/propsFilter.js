import { pick } from "../../../../utils/objects/object";

/* start - select content filter */
const whtListContentOptions = ["maxHeight"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getContentOptionsFilter = (props) => {
  return pick(props, whtListContentOptions);
};
/* end - select content filter */

/* start - select content panel filter */
const whtListPanelOptions = ["maxHeight"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getPanelOptionsFilter = (props) => {
  return pick(props, whtListPanelOptions);
};
/* end - select content panel filter */

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
