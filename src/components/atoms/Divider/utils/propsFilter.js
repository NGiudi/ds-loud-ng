import { pick } from "../../../../utils/objects/object";

/* start - wrapper filter */
const whtWrapperOptions = ["margin", "color"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  return pick(props, whtWrapperOptions);
};
/* end - wrapper filter */
