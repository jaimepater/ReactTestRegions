/**
 * Convery a text in an array of arrays
 *
 * @param {string} text to convert
 * @param {string} delimiter to split the text
 * @param {function} callback function to do something to the field
 *
 */
export const convertTextToArray = (text, delimiter, callback) =>
  text
    .replace(/[“”"']/g, '')
    .split('\n')
    .filter(row => row !== '')
    .map(row => callback(row.split(delimiter)));
