# [Question Marks](https://www.coderbyte.com/editor/Questions%20Marks:JavaScript)
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

## Examples
```javascript
Input: "aa6?9"
Output: false
 ```
```javascript
Input: "acc?7??sss?3rr1??????5"
Output: true
```

## To Run Tests
```bash
npm install

npm test
```

## Solutions
1. [First Solution](./solution_1.js)
2. [Second Solution](./solution_2.js)

## Tags
* string manipulation
* searching
* hash table
* free
* cache