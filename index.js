function isPalindrome(word) {
  // Write your algorithm here
  let reversal = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversal += word[i]
  }
  return word.toLowerCase() === reversal.toLowerCase()
}
/* 
  Add your pseudocode here:
  1. Initialize an empty string `reversal`.
  2. Iterate through the given word from the last character to the first character.
  3. Append each character to `reversal`.
  4. Compare the original word with the reversed word.
  5. Return `true` if they are the same, otherwise return `false`.
*/

/*
  Add written explanation of your solution here:
  The function `isPalindrome` checks if a given word is a palindrome. 
  It reverses the word by iterating from the end to the beginning and constructing a new string `reversal`. 
  It then compares the original word with the reversed string to see if they are identical. 
  If they are, the function returns `true`, indicating the word is a palindrome. Otherwise, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
