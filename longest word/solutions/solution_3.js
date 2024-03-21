function LongestWord(sen) { 
  let long = ""
  // code goes here 
  const matches = /[A-Z0-9]+/gi
  sen = sen.match(matches)
  for (i = 0;i < sen.length; i ++) {
    if (sen[i].length > long.length) {
      long = sen[i]
    }
  }
  return long
}