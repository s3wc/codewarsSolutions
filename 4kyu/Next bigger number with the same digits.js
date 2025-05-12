// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

//solution:
function nextBigger(n) {
    let numArray = Array.from(String(n), Number);
    let i = numArray.length - 1;
    while (i > 0 && numArray[i - 1] >= numArray[i]) {
        i--;
    }
    if (i === 0) return -1;
    let j = numArray.length - 1;
    while (numArray[j] <= numArray[i - 1]) {
        j--;
    }
    [numArray[i - 1], numArray[j]] = [numArray[j], numArray[i - 1]];
    let left = numArray.slice(0, i);
    let right = numArray.slice(i).reverse();
    return parseInt(left.concat(right).join(''), 10);
}

console.log(nextBigger(12));