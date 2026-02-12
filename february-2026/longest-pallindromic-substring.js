/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 0;
    let ans = [];
    for(let i = 0; i< s.length; i++){
        let start = i, end = i;
        while(start>=0 && end<s.length){
            if(s[start]!==s[end])break;
            start--;
            end++;
        }
        let odd = end-start-1;
        let oddStr = s.slice(start+1, end);
        start = i, end = i+1;
        while(start>=0 && end<s.length){
            if(s[start]!==s[end])break;
            start--;
            end++;
        }
        let even = end-start-1;
        let evenStr = s.slice(start+1, end);
        let maxStr, maxNum;
        if(odd<even){
            maxNum = even;
            maxStr = evenStr;
        }else{
            maxNum = odd;
            maxStr = oddStr;
        }
        if(maxLen<maxNum){
            maxLen = maxNum;
            ans = maxStr;
        }
    }
    return ans;
};