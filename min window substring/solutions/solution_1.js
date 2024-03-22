function MinWindowSubstring(strArr) { 
  
  // code goes here
  const string1 = strArr[0]
  const string2 = strArr[1]
  let shortestString = null

  const stringIncludes = (str) => {
    let ref = string2
    let k = 0
    while (k < string2.length) {
      if (str.indexOf(string2[k]) !== -1) {
        ref = ref.replace(string2[k],"")
        str = str.replace(string2[k], "_")
      }
      k++
    }
    return (ref.length === 0)
  }
  
  let i = 0
  while (i < string1.length) {
    let j = (i + 1)
    while (j <= string1.length) {
      // console.log("I: ", i, "J: ", j)
      testString = string1.slice(i,j)
      // console.log(testString)
      if (stringIncludes(testString)) {
        // console.log(testString)
        if (shortestString === null || testString.length < shortestString.length) {
          shortestString = testString
        }
      }
      j ++
    }
    i++
  }
  
  return shortestString
}