function FindIntersection(strArr) { 
  let intObj = {}
  arr1 = strArr[0].split(",")
  arr2 = strArr[1].split(",")
  // code goes here
  for (i = 0;i < arr1.length; i++) {
    let key = arr1[i].trim()
    intObj[key] = 1
  }
  for (i = 0;i < arr2.length; i++) {
    let key = arr2[i].trim()
    if (intObj[key] === 1) {
      intObj[key] += 1
    }
  }
  let intersect = Object.keys(intObj).filter((key) => intObj[key] === 2)
  if (intersect.length > 0) {
    return intersect
  }
  return false
}