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



var simplifyPath = function(path) {
    let strings = path.split("/");
    let stack = [];
    console.log(strings);
    for (const part of strings) {
        if (part === '..') {
            if (stack.length > 0) stack.pop();
        } else if (part === '' || part === '.') {
            continue;
        } else {
            stack.push(part);
        }
    }
    console.log(stack);
    let result = '/' + stack.join('/');
    return result;f
};

// const path = "/home//foo/";
// console.log(simplifyPath(path));
// https://leetcode.com/problems/simplify-path/description/




var reverseWords = function(s) {
    let words = s.trim().split(" ");
    let result = "";
    console.log(words);
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] === '') {
            continue;
        } else {
            result += words[i];
        }
        if (i > 0) result += ' ';
    }
    return result;
};

// const s = "a good   example";
// console.log(reverseWords(s));
// https://leetcode.com/problems/reverse-words-in-a-string/description/



var isMatch = function(s, p) {
    return match(s, p, 0, 0);
};

function match(s, p, i, j) {
    // Base case
    if (i >= s.length && j >= p.length) return true; // if reached end of strings for both
    if (j >= p.length) return false; // if there's still s string but no more p string

    // If we reached end of s, p can still match if remaining pattern is all *
    if (i >= s.length) {
        if (j + 1 < p.length && p[j + 1] === '*') {
            return match(s, p, i, j + 2);
        }
        return false;
    }

    // Check if current characters match
    const currMatch = s[i] === p[j] || p[j] === '.';
    
    // look ahead if next character is *
    if (j + 1 < p.length && p[j + 1] === '*') {
        const skipStar = match(s, p, i, j + 2); // Try skipping characters
        const useStar = currMatch && match(s, p, i + 1, j); // Try duplicating the character
        return skipStar || useStar; // Just need one to be true and it passes
    }

    if (currMatch) {
        return match(s, p, i + 1, j + 1);
    }
    return false;
}

// let s = "aa", p = "a";
// console.log(isMatch(s, p));
// https://leetcode.com/problems/regular-expression-matching/





// var findSubstring = function(s, words) {
//     if (!s || !words || !words.length) return [];
//     const wordLen = words[0].length;
//     const totalLen = wordLen * words.length;
//     const result = [];
//     const wordCount = new Map();
//     for (let word of words) {
//         wordCount.set(word, (wordCount.get(word) || 0) + 1);
//     }
//     for (let i = 0; i <= s.length - totalLen; i++) {
//         const seen = new Map();
//         let j = 0;
//         while (j < words.length) {
//             const currWord = s.slice(i + j * wordLen, i + (j + 1) * wordLen);
//             if (!wordCount.has(currWord)) break;
//             seen.set(currWord, (seen.get(currWord) || 0) + 1);
//             if (seen.get(currWord) > wordCount.get(currWord)) break;
//             j++;
//         }
//         if (j === words.length) result.push(i);
//     }
//     return result;
// };


// const s = "barfoothefoobarman", words = ["foo","bar"];
// console.log(findSubstring(s, words));
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/





var longestValidParentheses = function(s) {
    let maxLength = 0;
    const stack = [-1];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLength;
};

// const s = ")()())";
// console.log(longestValidParentheses(s));




function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // Step 1: Create a frequency map for characters in t
    const tMap = {};
    for (let char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }

    let left = 0;
    let minLen = Infinity;
    let minStart = 0;
    let required = Object.keys(tMap).length;
    let formed = 0;
    const windowCounts = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tMap[char] && windowCounts[char] === tMap[char]) {
            formed++;
        }

        while (formed === required) {
            // Update minimum window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            const leftChar = s[left];
            windowCounts[leftChar]--;
            if (tMap[leftChar] && windowCounts[leftChar] < tMap[leftChar]) {
                formed--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
}
// const s = "cabwefgewcwaefgcf", t = "cae";
// console.log(minWindow(s, t));
// https://leetcode.com/problems/minimum-window-substring/




var countSubstrings = function(s) {
    let n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let left = right = i;
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        left = i, right = i + 1;
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    return count;
};

// const s = "aaa";
// console.log(countSubstrings(s));
// https://leetcode.com/problems/palindromic-substrings/?envType=problem-list-v2&envId=oizxjoit




var mergeAlternately = function(word1, word2) {
    let result = "";
    if (word1.length === 0 && word2.length === 0) return result;
    let i = 0, left = 0, right = 0;
    while (left < word1.length && right < word2.length) {
        result += word1[left];
        left++;
        i++;
        result += word2[right];
        right++;
        i++;
    }
    while (left < word1.length) {
        result += word1[left];
        left++;
    }
    while (right < word2.length) {
        result += word2[right];
        right++;
    }
    return result;
};


// const word1 = "abc", word2 = "pqr";
// console.log(mergeAlternately(word1, word2));
// https://leetcode.com/problems/merge-strings-alternately/description/





// Euclidian Algo
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    function gcd(len1, len2) {
        while (len2 !== 0) {
            [len1, len2] = [len2, len1 % len2];
        }
        return len1;
    }

    return str1.slice(0, gcd(str1.length, str2.length));

};


//Alternative
// function gcdOfStrings2(str1, str2) {
//     if (str1 + str2 !== str2 + str1) return "";

//     function gcd(len1, len2) {
//         let minVal = Math.min(len1, len2);
//         for (let i = minVal; i > 0; i--) {
//             if (len1 % i === 0 && len2 % i === 0) return i;
//         }
//         return 1;
//     }

//     return str1.substring(0, gcd(str1.length, str2.length));
// }



// const str1 = "ABCABC", str2 = "ABC";
// console.log(gcdOfStrings(str1, str2));

// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/





var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);
    let dp = Array(s.length + 1).fill(false);
    dp[s.length] = true;
    for (i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j <= s.length; j++) {
            if (wordSet.has(s.substring(i, j)) && dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }
    console.log(dp);
    return dp[0];
};

// const s = "leetcode", wordDict = ["leet","code"];
// console.log(wordBreak(s, wordDict));
// https://leetcode.com/problems/word-break/description/