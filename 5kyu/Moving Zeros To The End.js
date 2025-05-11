// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//solution:
function moveZeros(arr) {
    let filteredArr = [];
    let count = 0;
    arr.forEach(element => {
        if (element !== 0) filteredArr.push(element);
        else count++;
    });
    for (let i = 0; i < count; i++) {
        filteredArr.push(0);
    }
    return filteredArr;
}