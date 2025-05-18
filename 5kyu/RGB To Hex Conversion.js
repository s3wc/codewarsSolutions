// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

//solution:
function rgb(r, g, b) {
    return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

function convertToHex(num) {
    num = Math.max(0, Math.min(255, num));
    let hex = num.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
}