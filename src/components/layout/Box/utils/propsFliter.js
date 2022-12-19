import { pick } from "../../../../utils/objects/object";

/* start - barOptions filter */
const whtListColumnsOptions = ["margin"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  return pick(props, whtListColumnsOptions);
};
/* end - barOptions filter */
