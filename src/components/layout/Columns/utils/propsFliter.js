import { pick } from "../../../../utils/objects/object";

/* start - barOptions filter */
const whtListColumnsOptions = ["gap", "margin"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  let validOptions = pick(props, whtListColumnsOptions);

  //? modify prop name.
  validOptions.$minWidth = props.minWidth;

  return validOptions;
};
/* end - barOptions filter */
