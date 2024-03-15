function FindIntersection(strArr) { 
  // code goes here
  return strArr[0].split(",").filter((num) => strArr[1].split(",").includes(num)).join(",") || false
}