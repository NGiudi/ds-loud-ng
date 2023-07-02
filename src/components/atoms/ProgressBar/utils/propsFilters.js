import { pick } from "../../../../utils/objects/object";

/* start - barOptions filter */
const whtListBarOptions = [
  "noShowAnimationOnFirstLoad",
  "onFinish",
  "size",
  "step",
  "stepTime",
  "steps",
];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getBarOptionsFilter = (props) => {
  return pick(props, whtListBarOptions);
};
/* end - barOptions filter */

/* start - progressBarOptions filter */
const whtListProgressBarOptions = ["margin", "size"];

/**
 * @param {object} props component properties.
 * @return {object} filtered props.
 */
export const getProgressBarOptionsFilter = (props) => {
  let validOptions = pick(props, whtListProgressBarOptions);

  //? modify prop name.
  validOptions.$borderRound = props.borderRound;

  return validOptions;
};
/* end - barOptions filter */
