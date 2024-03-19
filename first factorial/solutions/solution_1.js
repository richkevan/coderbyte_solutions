function FirstFactorial(num) { 
  let factorial = 1
  // code goes here  
  for (i=num;i>1;i--) {
    factorial *= i
  } 
  return factorial
}