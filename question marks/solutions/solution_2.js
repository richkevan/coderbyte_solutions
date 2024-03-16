function QuestionsMarks(str) { 
  str = str.split('');
  str = str.filter((char) => {
    return !isNaN(char) || char === '?';
  });
  console.log(str);
  counts = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      for (let j = i+1 ; j < str.length; j++) {
        if (!isNaN(str[j])) {
          if (parseInt(str[i]) + parseInt(str[j]) === 10) {
            if (str.slice(i, j).filter((char) => char === '?').length >= 3) {
              counts.push(true);
            } else {
              counts.push(false);
            }
          }
        }
      }
    }
  }
  if (counts.length === 0) {
    counts.push(false);
  }
  console.log(counts.includes(false) ? false : true);
}