/**
 * Set a regions reader for a file
 *
 * @param  {array}  regions The repository data
 * @return {object}   An action object with a type of SET_REGIONS
 */
export function setFiles(regions) {
  return {
    type: 'SET_REGIONS',
    regions,
  };
}
