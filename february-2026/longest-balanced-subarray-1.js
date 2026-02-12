/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let maxLen = 0;
    for(let i = 0; i< nums.length; i++){
        const even = new Set();
        const odd = new Set();
        let evenCount = 0, oddCount = 0;
        for(let j = i; j< nums.length; j++){
            if(nums[j]%2===0 && !even.has(nums[j])){
                even.add(nums[j]);
            }else if(nums[j]%2===1 && !odd.has(nums[j])){
                odd.add(nums[j])
            }
            if(even.size === odd.size){
                maxLen = Math.max(maxLen, j-i+1);
            }
        }
    }
    return maxLen;
};