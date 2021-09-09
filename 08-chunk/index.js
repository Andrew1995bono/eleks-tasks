// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let result = arr.reduce((rows, key, index) => (index % size == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
    return result;
};
