export const sameParityFilter = (arr = []) => {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }

    if (arr[0] % 2 == 0) {
        return even;
    } else {
        return odd;
    }
}
