function QuestionsMarks(str) { 
  str = str.split('');
  str = str.filter((char) => {
    return !isNaN(char) || char === '?';
  });
  counts = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {;
      let section = str.slice(i, i+5);
      let j = section[4];
      let total = section.filter((char) => char !== "?").reduce((a,b) => parseInt(a) + parseInt(b), 0);
      let questionMarks = section.filter((char) => char === '?').length;
        if (!isNaN(j) && total === 10 && questionMarks >= 3) {
            counts.push(true);
          } else if (isNaN(j) && total === 10) {
            counts.push(false);
          }
        }
      }
    if (counts.length === 0) {
      return false;
    }
  return(counts.includes(false) ? false : true);
}