function CodelandUsernameValidation(str) { 
  
  const unifiedRegex = /^[A-Za-z][\w\d]{2,23}[A-Za-z0-9]$/

  return (unifiedRegex.test(str))

}