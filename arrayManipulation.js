/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // Write your code here
  // Write your code here
  // Create an answer variable named "answerArr" that is an array the length of n+1 and initialized to contain all zeroes.
  let answerArr = new Array(n + 1).fill(0);
  //console.log(answerArr)
  // Loop through [querries] and populate [answerArr] with + the value of (k) at start index(a), and - the value of (k) at end index(b)
  //declare variable to store tmp counter as well as max value
  let max = 0;
  let tmp = 0;
  for (let query in queries) {
    var start = queries[query][0];
    var end = queries[query][1];
    var valu = queries[query][2];
    answerArr[start] = answerArr[start] + valu;
    answerArr[end + 1] = answerArr[end + 1] - valu;
  }
  // Loop through [answerArr] and keep track of value in each index returning the maximum number that was accumalated.
  for (let answer in answerArr) {
    tmp = tmp + answerArr[answer];
    if (tmp > max) {
      max = tmp;
    }
  }
  console.log(max);
  return max;
}

arrayManipulation(4, [
  [2, 3, 603],
  [1, 1, 286],
  [4, 4, 882],
]);

arrayManipulation(40, [
  [29, 40, 787],
  [9, 26, 219],
  [21, 31, 214],
  [15, 23, 102],
  [11, 24, 83],
  [14, 22, 321],
  [5, 22, 300],
  [11, 30, 832],
  [5, 25, 29],
  [16, 24, 577],
  [3, 10, 905],
  [15, 22, 335],
  [29, 35, 254],
  [9, 20, 20],
  [33, 34, 351],
  [30, 38, 564],
  [11, 31, 969],
  [3, 32, 11],
  [29, 35, 267],
  [4, 24, 531],
  [1, 38, 892],
  [12, 18, 825],
  [25, 32, 99],
  [3, 39, 107],
  [12, 37, 131],
  [8, 39, 483],
  [8, 11, 194],
  [12, 37, 502],
]);
