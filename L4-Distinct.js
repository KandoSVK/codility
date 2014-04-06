/**
 * Created by kando on 29.3.2014.
 */
/***
 Write a function
 function solution(A);
 that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A.
 Assume that:
 N is an integer within the range [0..100,000];
 each element of array A is an integer within the range [−1,000,000..1,000,000].
 For example, given array A consisting of six elements such that:
 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
 the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.
 Complexity:
 expected worst-case time complexity is O(N*log(N));
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 ***/

function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var pom = {};
    var count = 0;
    for(var i=0;i<A.length;i++){
        if(!pom.hasOwnProperty(A[i])){
            pom[A[i]] = true;
            count++;
        }
    }

    return count;
}