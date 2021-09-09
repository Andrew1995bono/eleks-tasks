/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let newString = numbers.split(' ').map((i) => Number(i));
    let minValue = Math.min(...newString).toString();
    let maxValue = Math.max(...newString).toString();
    let highestAndLowest;
    highestAndLowest = minValue.concat(' ', maxValue);
    return highestAndLowest;
}
