/**
 * Converts large numbers to a more readable form by appending suffixes
 * (supports millions, billions, and trillions).
 *
 * @param {number} number - Number to prettify
 * @returns {string} String representation of the number with the appropiate suffix.
 */
function prettifyNumber(number) {
  // Define suffixes for million, billion, and trillion
  const suffixes = [
    { value: Math.pow(10, 12), suffix: "T" },
    { value: Math.pow(10, 9), suffix: "B" },
    { value: Math.pow(10, 6), suffix: "M" },
  ];

  // Iterate through the suffixes (largest to smallest) to determine if the current number is large enough.
  for (const { value, suffix } of suffixes) {
    if (number >= value) {
      // If large enough, return formatted number
      return formatNumber(number, value, suffix);
    }
  }

  // If not large enough, return the same number as a string
  return number.toString();
}

/**
 * Formats a number by dividing it with the divisor and adding the suffix to it.
 * Rounds number to one decimal place if necessary.
 *
 * @param {number} number - Number to format
 * @param {number} divisor - Value to divide number with
 * @param {string} suffix - Suffix to append to the number
 * @returns {string} Formatted number with suffix.
 */
function formatNumber(number, divisor, suffix) {
  // Round the number to 1 decimal place
  const roundedNumber = Number((number / divisor).toFixed(1));

  // Return the formatted number
  return roundedNumber % 1 === 0
    ? `${Math.trunc(roundedNumber)}${suffix}`
    : `${roundedNumber}${suffix}`;
}

module.exports = prettifyNumber;
