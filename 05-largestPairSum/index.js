/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let max = numbers[0];
    let max1 = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    let newArr = numbers.filter((item) => {
        if (item == max) {
            return false;
        } else {
            return true;
        }
    })

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > max1) {
            max1 = newArr[i];
        }
    }
    return max + max1;
}
