function LongestWord(sen) { 

  // code goes here 
  const matches = /[A-Z0-9 ]/gi
  sen = sen.split("").filter(char => char.match(matches)).join("")
  const senArr = sen.split(" ").sort((a,b) => b.length - a.length)
  return senArr[0]; 

}