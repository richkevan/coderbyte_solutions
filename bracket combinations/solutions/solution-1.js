function BracketCombinations(num) { 

  // code goes here
  if (num <= 1) return 1;
  let C = 0;
  for (let i = 0; i < num; i++) {
    C += BracketCombinations(i) * BracketCombinations(num - i - 1);
  };

  return C;
}