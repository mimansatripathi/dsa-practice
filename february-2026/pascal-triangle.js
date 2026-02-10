/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];

    const res = [];

    for(let i = 0; i<numRows; i++){
        const temp = new Array(i+1);
        temp[0] = 1;
        temp[i] = 1;

        for(let j = 1; j<i; j++){
            temp[j] = res[i-1][j-1] + res[i-1][j];
        }
        res.push(temp);
    }
    return res;
};