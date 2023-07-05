function addCommas(num) {
  // stringify the number, split on decimals, declare output stings
  const stringNum = num.toString();
  const [integers, decimals] = stringNum.split(".");
  let intOut = "";
  let decOut = "";

  // add commas to the integers
  let intCount = 0;
  for (let i = integers.length - 1; i >= 0; i--) {
    intCount++;
    if (intCount % 3 === 0 && integers.length - intCount > 0) {
      intOut = "," + integers[i] + intOut;
    } else {
      intOut = integers[i] + intOut;
    }
  }
  //  handle the decimals
  if (decimals) {
    decOut = "." + decimals;
  }
  return intOut + decOut;
}

module.exports = addCommas;
