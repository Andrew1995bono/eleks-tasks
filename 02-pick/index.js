/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let newObj = {};
    if (fields == undefined) {
        return newObj;
    }
    for (let key in obj) {
        for (let element of fields) {
            if (element == key) {
                newObj[element] = obj[key];
            }
        }
    }
    return newObj;
}
