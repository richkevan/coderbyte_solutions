function BracketCombinations(num) { 

  // code goes here
  const factorial = (n) => {
    let f = 1
    for (let i = n; i >= 1; i--) {
      f *= i;
    }
    return f;
  };

  const C = (factorial(2 * num)) / (factorial(num + 1) * factorial(num));

  return C;
}

