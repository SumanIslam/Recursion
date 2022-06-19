// print name 'N' times using recursion
// ------------------------------------
function printName(i,n) {
  if (i > n) return;
  
  console.log('Suman');

  printName(i+1, n)
}

printName(1, 5);
