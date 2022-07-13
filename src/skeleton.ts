/**
 * Adds together two numbers
 * @param INPUTARRAY - the number array to be grouped
 * @param GROUPSIZE - the second number which gives the groupsize
 * @returns two arrays: one of its odd elements, one of its even elements.
 */
function chunk(INPUTARRAY: number[], GROUPSIZE: number): number[][] {
  let SMALLERARRAY = [];
  const RESULT = [];
  for (let i = 0; i < INPUTARRAY.length; i += GROUPSIZE) {
    SMALLERARRAY = INPUTARRAY.slice(i, i + GROUPSIZE);
    RESULT.push(SMALLERARRAY);
  }
  return RESULT;
}
export default chunk;
