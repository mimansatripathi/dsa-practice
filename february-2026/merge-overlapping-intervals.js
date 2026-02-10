/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];
    let temp = [];
    intervals.sort((a, b)=>{
        if(a[0] !== b[0]) return a[0]-b[0];
        return a[1]-b[1];
    })
    for (let i = 0; i < intervals.length; i++) {
        let curr = intervals[i];
        console.log(curr);
        if (temp.length === 0) {
            temp.push(...curr);
        }
        else if (temp[1] >= curr[0]) {
             if(temp[1]<curr[1])temp[1] = curr[1];
        }
        else if (temp && temp[1] < curr[0]) {
            res.push(temp);
            temp = [...curr];
        }
    }
    if(temp.length>0){
            let curr = res.slice(-1);
            if(temp[1]>=curr[0]) temp[1] = curr[1];
            else res.push(temp);
        }
    return res;
};