import { pick } from "../../../../utils/objects/object";

/* start - wrapper filter */
const whtListWrapperOptions = ["margin"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getWrapperOptionsFilter = (props) => {
  let validOptions = pick(props, whtListWrapperOptions); 
  
  //? modify prop name.
  validOptions.$hAlign = props.hAlign;
  validOptions.$vAlign = props.vAlign;

  return validOptions;
};
/* end - wrapper filter */
