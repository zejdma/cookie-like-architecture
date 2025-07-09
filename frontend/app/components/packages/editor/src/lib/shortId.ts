export function shortId() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const finalfirstPart = ("000" + firstPart.toString(36)).slice(-3);
  const finalsecondPart = ("000" + secondPart.toString(36)).slice(-3);
  return finalfirstPart + finalsecondPart;
}
