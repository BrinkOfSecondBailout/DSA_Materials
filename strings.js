var romanToInt = function(s) {
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = romans[s[i]];
        let next = romans[s[i + 1]];
        if (curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }
    return result;
};
// let s = "III";
// console.log(romanToInt(s));
// https://leetcode.com/problems/roman-to-integer/description/


var longestCommonPrefix = function(strs) {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let string = strs[i];
        while(string.indexOf(result) !== 0) {
            result = result.substring(0, result.length - 1);
        }
    };
    return result;
}

// let strs = ["flower","flow","flight"];
// console.log(longestCommonPrefix(strs));
// https://leetcode.com/problems/longest-common-prefix/description/


var isValid = function(s) {
    if (s.length === 0 || s.length === 1) return false;
    const brackets = {
        "]": "[",
        ")": "(",
        "}": "{"
    }

    if (s[0] === "]" || s[0 === ")" || s[0] === "}"]) return false;

    let stack = [];

    for (const bracket of s) {
        if (bracket in brackets) {
            if (stack && stack[stack.length - 1] === brackets[bracket]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }
    return stack.length === 0;
};

// let s = "()";
// isValid(s);
// https://leetcode.com/problems/valid-parentheses/description/



var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    let seen = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            right++;
            max = Math.max(max, right - left);
        } else {
            seen.delete(s[left]);
            left++;
        }
    }
    return max;
};

// let s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/




var longestPalindrome = function(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let lenOdd = expandOut(s, i, i);
        let lenEven = expandOut(s, i, i + 1);
        let lenMax = Math.max(lenOdd, lenEven);

        if (lenMax > end - start) {
            start = i - Math.floor((lenMax - 1) / 2);
            end = i + Math.floor(lenMax / 2);
        }
    }
    return s.substring(start, end + 1);
}

function expandOut(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// let s = "babad";
// console.log(longestPalindrome(s));
// https://leetcode.com/problems/longest-palindromic-substring/description/



var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let result = '';
    const cycleLength = numRows + (numRows - 2);

    for (let row = 0; row < numRows; row++) {
        for (let i = 0; i + row < s.length; i += cycleLength) {
            result += s[i + row];

            if (row > 0 && row < numRows - 1) {
                const diagonalIndex = i + cycleLength - row;
                if (diagonalIndex < s.length) result += s[diagonalIndex];
            }
        }
    }
    return result;
};

// let s = "PAYPALISHIRING";
// let numRows = 3;
// console.log(convert(s, numRows));

// https://leetcode.com/problems/zigzag-conversion/


var intToRoman = function(num) {
    const romans = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ]
    let result = "";
    while (num > 0) {
        for (const item of romans) {
            if (num >= item.value) {
                result += item.symbol;
                num -= item.value;
                break;
            }
        }
    }
    return result;
};

// const num = 1994;
// console.log(intToRoman(num));
// https://leetcode.com/problems/integer-to-roman/description/