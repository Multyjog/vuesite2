export function renderSum(priceCents) {
  const dollar = parseInt(priceCents / 100);
  const cents = parseInt(priceCents - dollar * 100);
  let centsZero = "0";
  if (cents > 9) {
    centsZero = "";
  }
  const message = "$" + dollar + "." + centsZero + cents;
  return message;
}
