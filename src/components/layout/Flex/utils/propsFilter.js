import { pick } from "../../../../utils/objects/object";

/* start - wrapper filter */
const whtListWrapperOptions = ["hAlign", "margin", "vAlign"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  return pick(props, whtListWrapperOptions);
};
/* end - wrapper filter */
