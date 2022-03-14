/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const lowerCaseStr = str.toLowerCase();
  const myNameArray = lowerCaseStr.split('');
  const firstLetter = myNameArray[0];
  const restOfTheStringArray = myNameArray.slice(1);
  const capitalizedFirstLetter = firstLetter.toUpperCase();
  const capitalizedStringArray = [capitalizedFirstLetter, ...restOfTheStringArray];
  return capitalizedStringArray.join('');
}

  /*DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
