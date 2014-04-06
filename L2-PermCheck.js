/**
 * Created by kando on 28.3.2014.
 */
/***
 A non-empty zero-indexed array A consisting of N integers is given.
 A permutation is a sequence containing each element from 1 to N once, and only once.
 For example, array A such that:
 A[0] = 4
 A[1] = 1
 A[2] = 3
 A[3] = 2
 is a permutation, but array A such that:
 A[0] = 4
 A[1] = 1
 A[2] = 3
 is not a permutation.
 The goal is to check whether array A is a permutation.
 Write a function:
 function solution(A);
 that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.
 For example, given array A such that:
 A[0] = 4
 A[1] = 1
 A[2] = 3
 A[3] = 2
 the function should return 1.
 Given array A such that:
 A[0] = 4
 A[1] = 1
 A[2] = 3
 the function should return 0.
 Assume that:
 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [1..1,000,000,000].
 Complexity:
 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 ***/

function swap(A, i1, i2) {
    var pom = A[i1];
    A[i1] = A[i2];
    A[i2] = pom;
}

function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    for(var i=0;i<A.length;i++) {
        //check if number is outside scope or there is already that number
        while(A[i] != i+1) {
            if(A[i] > A.length)
                return 0;   //value outside scope

            if(A[A[i]-1] == A[i])
                return 0; //already sorted that number => its duplicate

            swap(A, i, A[i] - 1);
        }
    }
    return 1;
}