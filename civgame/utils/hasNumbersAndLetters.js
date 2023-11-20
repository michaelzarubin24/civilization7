export function hasNumbersAndLetters(input) {
  let hasLetters = false;
  let hasNumbers = false;

  for (let char of input) {
    if (/[a-zA-Z]/.test(char)) {
      hasLetters = true;
    } else if (/[0-9]/.test(char)) {
      hasNumbers = true;
    }

    if (hasLetters && hasNumbers) {
      return true;
    }
  }

  return false;
}
