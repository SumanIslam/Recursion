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
function printFromOneToN(i,n) {
  if(i > n) return;

  console.log(i);
  printFromOneToN(i+1, n);
}

printFromOneToN(1,5);