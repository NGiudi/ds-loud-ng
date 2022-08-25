import { pick } from "../../../../utils/objects/object";

/* start - barOptions filter */
const whtListColumnsOptions = ["gap", "margin", "minWidth"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  return pick(props, whtListColumnsOptions);
};
/* end - barOptions filter */
