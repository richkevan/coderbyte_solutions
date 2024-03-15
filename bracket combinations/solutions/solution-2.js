function BracketCombinations(num) { 

  // code goes here
  const recFactorial = (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return (n * recFactorial(n-1));
    }
  };

  const C = (recFactorial(2 * num)) / (recFactorial(num + 1) * recFactorial(num));

  return C;
}