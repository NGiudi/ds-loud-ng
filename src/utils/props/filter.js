import filterOptions from "./filterLists";
import { pick } from "lodash";

/**
 * @param {object} props properties of component.
 * @param {array} whiteList properties to get.
 * @return {object} filtered props.
 */
export const propsFilter = (props, whiteList) => {
  return pick(props, filterOptions[whiteList]);
};
