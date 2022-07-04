// print name 'N' times using recursion
// ------------------------------------
// function printName(i,n) {
//   if (i > n) return;
  
//   console.log('Suman');

//   printName(i+1, n)
// }

// printName(1, 5);

// print number from 'ONE' to 'N' using recursion
// ----------------------------------------------
// function printFromOneToN(i,n) {
//   if(i > n) return;

//   console.log(i);
//   printFromOneToN(i+1, n);
// }

// printFromOneToN(1,5);

// print number from 'N' to 'ONE' using recursion
// ----------------------------------------------
// function printFromNToONe(i, n) {
//   if(n < i) return;
//   console.log(n);
//   printFromNToONe(i, n-1);
// }

// printFromNToONe(1,10);

// print number from 'ONE' to 'N' using BackTracking
// -------------------------------------------------
// function printFromOneToN_BrackTracking(i,n) {
//   if (i<1) return;

//   printFromOneToN_BrackTracking(i-1, n);

//   console.log(i)
// }

// printFromOneToN_BrackTracking(10,10);

// print number from 'N' to 'ONE' using BackTracking
// -------------------------------------------------
// function printFromNToOne_BrackTracking(i,n) {
//   if (i>n) return;

//   printFromNToOne_BrackTracking(i+1, n);

//   console.log(i)
// }

// printFromNToOne_BrackTracking(1,10);

// print sum of 'N' numbers using parameterized recursion
// ------------------------------------------------------
// function parameterizedRecursion(i, sum) {
//   if(i<1) {
//     console.log(sum);
//     return;
//   }

//   parameterizedRecursion(i-1, sum+i);
// }

// parameterizedRecursion(3,0);

// print sum of 'N' numbers using functional recursion
// ---------------------------------------------------
// function sum(n) {
//   if(n==0) return 0;

//   return n + sum(n-1);
// }

// // sum(3);
// console.log(sum(3));

// find factorial of 'N' using recursion
// -------------------------------------
// function factorial(n) {
//   if(n==0 || n==1) return 1;

//   return n * factorial(n-1);
// }

// // factorial(4);
// console.log(factorial(4));

// Reverse an array using recursion with two pointer(l,f)
// ------------------------------------------------------
// const array = [5,3,1,2,7];
// const n = array.length;

// function swapElementOfArray(array,a,b) {
//   array[a] = array[a]+array[b];
//   array[b] = array[a]-array[b];
//   array[a]= array[a]-array[b];
//   return array;
// }

// function arrayReverse(array,l,r) {
//   if(l>=r) return;
//   swapElementOfArray(array,l,r);
//   arrayReverse(array,l+1,r-1);
// }

// console.log('Original Array: ', array);
// arrayReverse(array,0,n-1);
// console.log('Reversed Array: ', array);

// Reverse an array using recursion with only one pointer
// ------------------------------------------------------
// const array = [5,3,1,2,7,8];
// const n = array.length;

// function swapElementOfArray(array,a,b) {
//   array[a] = array[a]+array[b];
//   array[b] = array[a]-array[b];
//   array[a]= array[a]-array[b];
//   return array;
// }

// function arrayReverse(array,n,i) {
//   if(i>=Math.floor(n/2)) return;
//   swapElementOfArray(array,i,n-i-1);
//   arrayReverse(array,n,i+1);
// }

// console.log('Original Array: ', array);
// arrayReverse(array,n,0);
// console.log('Reversed Array: ', array);

// find palindrom using recursion (1st approach)
// ---------------------------------------------

// function swapElementOfArray(array,a,b) {
//   let temp = array[a];
//   array[a] = array[b];
//   array[b] = temp;
  
//   return array;
// }

// function arrayReverse(array,n,i) {
//   if(i>=Math.floor(n/2)) return;
//   swapElementOfArray(array,i,n-i-1);
//   arrayReverse(array,n,i+1);
//   return array;
// }

// function isPalindrom(string) {
//   const stringArray = string.split('');
//   const n = stringArray.length;
//   const newArray = arrayReverse(stringArray, n, 0);
//   const newString = newArray.join('');

//   if(newString == string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrom('madam'));

// find palindrom using recursion (2nd approach)
// ---------------------------------------------
// function isPalindrom(s,i) {
//   if(i >= Math.floor(s.length)) return true;
//   if(s[i] != s[s.length-i-1]) return false;
//   return isPalindrom(s, i+1);
// }

// console.log(isPalindrom('mascm',0));

// creating fibonacci of n numbers (iterative aproach)
// ---------------------------------------------------
// function createFibonacci(n) {
//   let first = 0;
//   let second = 1;
//   let sum=0;
//   let i;
//   for(i=0; i<=n; i++) {
//     if(i<=1) {
//       sum = i;
//     } else {
//       sum = first + second;
//       first = second;
//       second = sum;
//     }
//     console.log(sum);
//   }
// }

// createFibonacci(12);

// finding value of nth fibonacci numbers (recursion aproach)
// ----------------------------------------------------------
// function findFibonacci(n) {
//   if(n<=1) {
//     return n;
//   }

//   return findFibonacci(n-1) + findFibonacci(n-2);
// }

// console.log(findFibonacci(8));

// finding subsequences of an array (iterative aproach)
// ----------------------------------------------------
// function f1(array) {
//   const n = array.length;
//   const limit = 2**n - 1;
//   let i,j;

//   for(i=0; i<limit; i++) {
//     let subSequences = [];
//     for(j=0; j<n; j++) {
//       if(i & (1<<j)) {
//         subSequences.push(array[j]);
//       }
//     }
//     console.log(subSequences)
//   }
// }

// f1([3,1,2]);

// finding subsequences of an array (recursion aproach)
// ----------------------------------------------------
function f1(index, subsequenceArray, array, n) {
  if(index >=n) {
    console.log(subsequenceArray);
    return;
  }
  subsequenceArray.push(array[index]);
  f1(index+1, subsequenceArray, array, n);
  subsequenceArray.pop();
  f1(index+1, subsequenceArray, array, n);
}

f1(0,[],[3,1,2], 3);