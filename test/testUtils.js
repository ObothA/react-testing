/**
 *
 * @param {ShallowRwapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of the data-test attribute to search for
 * @returns {ShallowRwapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
