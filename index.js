function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  word = word.toLowerCase();

  // Remove any non-alphabet characters using a regular expression
  word = word.replace(/[^a-z]/g, "");

  // Reverse the word and compare it with the original word
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// Example usage:
console.log(isPalindrome("racecar")); // Expecting: true
console.log(isPalindrome("robot"));   // Expecting: false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
