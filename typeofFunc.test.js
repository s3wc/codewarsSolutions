const { expect } = require('chai');
const typeofFunc = require('./typeofFunc');

describe('typeofFunc', () => {
    it('should return "string" for string input', () => {
        expect(typeofFunc('hello')).to.equal('string');
    });

    it('should return "number" for number input', () => {
        expect(typeofFunc(123)).to.equal('number');
    });

    it('should return "boolean" for boolean input', () => {
        expect(typeofFunc(true)).to.equal('boolean');
    });

    it('should return "object" for object input', () => {
        expect(typeofFunc({})).to.equal('object');
    });

    it('should return "undefined" for undefined input', () => {
        expect(typeofFunc(undefined)).to.equal('undefined');
    });

    it('should return "function" for function input', () => {
        expect(typeofFunc(() => {})).to.equal('function');
    });

    function modifyArray(A, B) {
        let maximizingNum = 0;
        B.forEach((number) => {
            if (number > maximizingNum) maximizingNum = number;
        });

        for (let i = 0; i < A.length; i++) {
            if (maximizingNum > A[i]) {
                A[i] = maximizingNum;
                break;
            }
        }

        return A;
    }

    module.exports = modifyArray;
});