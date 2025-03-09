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

let s = "()";
isValid(s);