/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str) => {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString += str[i].repeat([i + 1]) + '-';
    }
    return newString;
}
