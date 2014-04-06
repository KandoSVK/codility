/**
 * Created by kando on 28.3.2014.
 */
/***
 A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 Your goal is to find that missing element.
 Write a function:
 function solution(A);
 that, given a zero-indexed array A, returns the value of the missing element.
 For example, given array A such that:
 A[0] = 2
 A[1] = 3
 A[2] = 1
 A[3] = 5
 the function should return 4, as it is the missing element.
 Assume that:
 N is an integer within the range [0..100,000];
 the elements of A are all distinct;
 each element of array A is an integer within the range [1..(N + 1)].
 Complexity:
 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 ***/

function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)

    //count sum of all elements SUM = (N*(N+1))/2
    //var SUM = ((A.length+1)*(A.length+2))/2; //cant use variable because of space complexity

    //count actual SUM
    var pom = 0;
    for(var i=0;i<A.length;i++) {
        pom += A[i];
    }

    //console.log(SUM+" "+pom);
    return (((A.length+1)*(A.length+2))/2) - pom;
}