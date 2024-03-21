function LongestWord(sen) { 

  // code goes here 
  const matches = /[A-Z0-9]+/gi
  return sen.match(matches).sort((a,b) => b.length - a.length)[0]

}