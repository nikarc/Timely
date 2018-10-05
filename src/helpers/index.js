/**
 * Truncates a string to 2 letter to be used in an icon
 * e.g. First Client => Fc, Client => Cl
 * @param {String} string String to truncate
 */
export const truncateString = string => {
  if (!string || !string.length) return '';
  const split = string.split(' ');
  return split.length > 1 ? split.slice(0, 2).map(s => s.substr(0, 1)).join('') : split[0].substr(0, 1);
}

/**
 * Return double digits form numbers < 10
 * e.g. 9 => '09'
 * @param {Number} number
 */
export const formatDoubleDigits = number => number < 10 ? `0${number}` : `${number}`;