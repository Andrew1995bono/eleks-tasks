export const getLastWordLength = str => {
    let n = str.split(/[\s,]+/);
    return n[n.length - 1].length;
};
