/**
 * @param {string} spacingString string with spacing values.
 * @param {string} type spacing type.
 * @return {string} spacing css code.
 */
const handleSpacing = (spacingString, type) => {
  let spacingsObj = {};
  let string = "";

  const spacings = spacingString.split(" ");

  spacings.forEach((elem) => {
    const keys = elem.split("-");
    const border = keys[0];
    const value = keys[1];

    spacingsObj[border] = value;
  });

  string += `${type}-bottom: ${
    spacingsObj.b || spacingsObj.y || spacingsObj.a || 0
  }px;`;

  string += `${type}-left: ${
    spacingsObj.l || spacingsObj.x || spacingsObj.a || 0
  }px;`;

  string += `${type}-right: ${
    spacingsObj.r || spacingsObj.x || spacingsObj.a || 0
  }px;`;

  string += `${type}-top: ${
    spacingsObj.t || spacingsObj.y || spacingsObj.a || 0
  }px;`;

  return string;
};

/**
 * @param {string} props components properties.
 * @param {string} defaultValue used if margin property is not received.
 * @return {string} string with margin values.
 */
export const marginProperties = (props, defaultValue) => {
  let string = "";

  if (props.$margin || defaultValue) {
    string = handleSpacing(props.$margin || defaultValue, "margin");
  }

  return string;
};

/**
 * @param {string} props components properties.
 * @param {string} defaultValue used if padding property is not received.
 * @return {string} string with padding values.
 */
export const paddingProperties = (props, defaultValue) => {
  let string = {};

  if (props.$padding || defaultValue) {
    string = handleSpacing(props.$padding || defaultValue, "padding");
  }

  return string;
};
