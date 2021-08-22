function compare(str) {
  var newStr = str.split("");
  var newStrRev = newStr.reverse;
  var joined = newStrRev.join("");
  var palindrome = "Palindrome";
  if (joined === str) {
    return palindrome;
  }
}
