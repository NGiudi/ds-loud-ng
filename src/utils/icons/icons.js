/**
 * takes a boolean value "isOpen" and returns a string representing an upward arrow
 * icon if "isOpen" is true, or a downward arrow if "isOpen" is false.
 *
 * @param {boolean} isOpen truth value if the menu is open.
 * @return {string} icon name.
 */
export const disclosureIcon = (isOpen) => {
  return isOpen ? "caret-up" : "caret-down";
};
