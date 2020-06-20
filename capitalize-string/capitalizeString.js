function capitalizeString(input) {
  if (!input) {
    return 'No string provided';
  } else if (!/[a-z]/i.test(input[0])) {
    return 'The first character is not a letter';
  }
  return input[0].toUpperCase() + input.substring(1, input.length);
}
export default capitalizeString;
