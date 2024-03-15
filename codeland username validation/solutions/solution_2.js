function CodelandUsernameValidation(str) { 

  const lengthRegex = /^[\w\d]{4,23}$/g
  const startRegex = /^[A-Za-z]/
  const constainRegex = /^[\w|-]*$/g
  const endRegex = /[_]$/

  return (lengthRegex.test(str) && startRegex.test(str) && constainRegex.test(str) && !endRegex.test(str))
}