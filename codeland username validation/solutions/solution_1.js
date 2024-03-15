function CodelandUsernameValidation(str) { 
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  // code goes here 
  const usernameLength = str.length >= 4 && str.length <= 25
  // Must start with a letter
  const usernameStart = alphabet.includes(str[0])
  // It can only contain numbers, letters, _
  const usernameContains = /^[\w|-]*$/g.test(str)
  // It can't end with an underscore
  const usernameEnds = str[str.length - 1] !== "_"
  console.log(usernameLength, usernameStart, usernameContains, usernameEnds)
  return (usernameLength && usernameStart && usernameContains && usernameEnds)
}