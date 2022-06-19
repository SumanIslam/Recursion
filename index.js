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
function factorial(n) {
  if(n==0 || n==1) return 1;

  return n * factorial(n-1);
}

// factorial(4);
console.log(factorial(4))