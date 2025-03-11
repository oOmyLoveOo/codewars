/*Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals
List containing overlapping intervals:
[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].*/
function sumIntervals(intervals) {
    //TODO
    // We will sort the intervals by the first element of each interval
    // Subtracts the 1st value of the 1st interval from the 1st value of the 2nd interval to sort the intervals.
    // And that constantly until it is sorted
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [];
    for (let i = 0; i < intervals.length; i++){
        let currentInterval = intervals[i];
        let currentStart = currentInterval[0];
        let currentEnd = currentInterval[1];
    // If the mergedIntervals array is not empty, we will check if the last interval in the mergedIntervals array has a value greater than or equal to the currentStart value.
    // If it is, we will update the last interval in the mergedIntervals array to have the maximum value between the last value of the last interval and the currentEnd value.
        if (mergedIntervals.length > 0){
            let lastMergedIntervals = mergedIntervals[mergedIntervals.length - 1];
            let lastValueOfLastMergedInt = lastMergedIntervals[1];
            if (lastValueOfLastMergedInt >= currentStart){
              mergedIntervals[mergedIntervals.length - 1][1] = Math.max(lastValueOfLastMergedInt, currentEnd);  
              continue;
            } 
        }
        mergedIntervals.push(currentInterval);
  }
  // We will loop through the mergedIntervals array and add the difference between the end and start of each interval to the totalLength variable.
  // the formula for the difference is end - start.
  let totalLength = 0;
  for (let [start, end] of mergedIntervals) {
      totalLength += end - start;
  }

  return totalLength;
}
