/**
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
 
var merge = function(intervals) {
  var input = [];
  for (var interval of intervals){
        input.push([interval.start, interval.end]);
  }

  var output = mergeInterval(input);
  var overlaps = [];
  for (var out of output) {
    var obj = {}
    obj.start = out[0];
    obj.end = out[1];
    overlaps.push(obj);
  }

  return overlaps;
}

function mergeInterval(intervals) {
    var output = [];
    var numArr = [];
    var max = Math.max.apply(this,flatten(intervals));
    for (var i = 0; i <= max; i++){
      numArr.push(0);
    }
    // 0 --> its not included in the output
    // 1 --> its included in the output but its the end of interval, it may also be start as well.
    // 2 --> its included in the output and its not the end of the interval
    
    for (var view of intervals){
      for(var i = view[0]; i <= view[1]; i++){
        // This makes 1. If it was already 2 then we do not want to make it back to 1 hence the Math.max
        numArr[i] = Math.max(numArr[i], 1)
        if (i > view[0]) {
          // This makes > 1
          numArr[i-1] = 2;
        }
      }
    }

    var start = -1;
    var end = -1;
    for (var i = 0; i < numArr.length; i++){
      // if we see 2 it means it either starts OR it continues
      if (numArr[i] === 2) {
        if (start === -1) start = end = i
        else end = end + 1
      }

      // if we see 1 it means it ends. It may as well be start.
      if (numArr[i] === 1) {
        if (start === -1) start = end = i
        else end = end +1

        output.push([start, end])
        start = end = -1
      }
      // if we 0 we just move on.
    }
    return output;
};

function flatten(arr){
   return arr.reduce((s,a)=>{
    s.push(a[0]);
    s.push(a[1]);
    return s;
  },[]);
}
