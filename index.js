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
function printFromOneToN_BrackTracking(i,n) {
  if (i<1) return;

  printFromOneToN_BrackTracking(i-1, n);

  console.log(i)
}

printFromOneToN_BrackTracking(10,10);