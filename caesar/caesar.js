function codeRange(charCode) {
  return charCode < 91 ? 65 : 97;
}

// true modulo
function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);
  return n % p;
}

function caesar(text, shift) {
  return text
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt();
      if (
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123)
      ) {
        const shiftedCode =
          mod(charCode - codeRange(charCode) + shift, 26) + codeRange(charCode);
        return String.fromCharCode(shiftedCode);
      } else {
        return char;
      }
    })
    .join('');
}

export default caesar;
