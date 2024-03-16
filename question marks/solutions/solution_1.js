function QuestionsMarks(str) { 
  let first = 0
  let second = 0
  let count = 0
  let final = []
  // code goes here  
  for (i=0;i< str.length;i++) {
    if (!isNaN(parseInt(str[i]))) {
      first = parseInt(str[i])
      for (j = i+1;j<str.length;j++) {
        if (str[j] == "?") {
          count ++
        }
        if (!isNaN(parseInt(str[j]))) {
          i = j-1
          second = parseInt(str[j])
        }
        if (second >= 1 && (first + second) === 10 && count >= 3) {
          first = 0
          second = 0
          count = 0
          final.push(true)
          break;
        } else if (second >= 1 && (first + second) === 10 && count != 3) {
          first = 0
          second = 0
          count = 0
          final.push(false)
          break;
        } else if (second >= 1 && (first + second) !== 10) {
          first = 0
          second = 0
          count = 0
          break;
        }
      }
    } else {
      first = 0
    }
  }
  if (final.length === 0) {
    final.push(false)
  } 
return(final.includes(false) ? false : true, final)
}