function calcTip(billAmount) {
// Calculate tip using ternary operator
const tip = billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;
return tip;
}
