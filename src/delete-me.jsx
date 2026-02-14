/*
=== Stage 1 ===
A pandigital number contains all digits (0-9) at least once. 
Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
Examples:
isPandigital(98140723568910) ➞ true
isPandigital(90864523148909) ➞ false
isPandigital(112233445566778899) ➞ false
*/

function isPandigital(num) {
    // your code
    let nums = {}
    let numString = String(num)
    for (let i = 0; i < numString.length; i++) {
        nums[numString[i]] = true;
    }


    if (Object.keys(nums).length == 10) {
        return true
    }
    else { return false }
}





/*
=== Stage 2 ===
A number is "pandigital in range" if it contains every digit from start to end (inclusive) at least once.
Write a function that takes a number and a range (start, end), and returns true if the number contains all digits in that range, false otherwise.
Constraints:
- 0 <= start <= end <= 9
Examples:
isPandigitalInRange(123456, 1, 6) ➞ true
isPandigitalInRange(612345, 1, 6) ➞ true
isPandigitalInRange(12345, 1, 6)  ➞ false
isPandigitalInRange(9081726354, 0, 9) ➞ true
isPandigitalInRange(553, 3, 5) ➞ true
*/

function isPandigitalInRange(num, start, end) {
    // your code
    let nums = {}
    let numString = String(num)
    for (let i = start; i < end; i++) {
        nums[numString[i]] = true;
    }

    if (Object.keys(nums).length == 10) {
        return true
    }
    else { return false }
}



const { isPandigital, isPandigitalInRange } = require('./isPandigital');

describe('Stage 1: isPandigital', () => {
    test('returns true when all digits 0-9 are present', () => {
        expect(isPandigital(98140723568910)).toBe(true);
    });

    test('returns false when missing digit 7', () => {
        expect(isPandigital(90864523148909)).toBe(false);
    });

    test('returns false when missing digits even with duplicates', () => {
        expect(isPandigital(112233445566778899)).toBe(false);
    });

    test('returns true for 1234567890', () => {
        expect(isPandigital(1234567890)).toBe(true);
    });

    test('returns true for 9876543210', () => {
        expect(isPandigital(9876543210)).toBe(true);
    });

    test('returns false for single digit', () => {
        expect(isPandigital(5)).toBe(false);
    });

    test('returns false for number missing 0', () => {
        expect(isPandigital(123456789)).toBe(false);
    });
});

describe('Stage 2: isPandigitalInRange', () => {
    test('returns true for 123456 with range 1-6', () => {
        expect(isPandigitalInRange(123456, 1, 6)).toBe(true);
    });

    test('returns true for 612345 with range 1-6 (different order)', () => {
        expect(isPandigitalInRange(612345, 1, 6)).toBe(true);
    });

    test('returns false for 12345 with range 1-6 (missing 6)', () => {
        expect(isPandigitalInRange(12345, 1, 6)).toBe(false);
    });

    test('returns true for 9081726354 with range 0-9', () => {
        expect(isPandigitalInRange(9081726354, 0, 9)).toBe(true);
    });

    test('returns true for 553 with range 3-5', () => {
        expect(isPandigitalInRange(553, 3, 5)).toBe(true);
    });

    test('returns true for single digit matching single range', () => {
        expect(isPandigitalInRange(5, 5, 5)).toBe(true);
    });

    test('returns false for single digit not matching range', () => {
        expect(isPandigitalInRange(5, 1, 3)).toBe(false);
    });

    test('returns true when digits appear multiple times', () => {
        expect(isPandigitalInRange(112233, 1, 3)).toBe(true);
    });

    test('returns false when one digit in range is missing', () => {
        expect(isPandigitalInRange(1357, 1, 5)).toBe(false);
    });
});