/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let newObj = {};
    if (fields == undefined) {
        return newObj;
    }
    for (let key in obj) {
        for (let element of fields) {
            if (key !== element) {
                newObj[key] = obj[key];
            } else {
                newObj = {};
            }
        }
    }
    return newObj;
};
