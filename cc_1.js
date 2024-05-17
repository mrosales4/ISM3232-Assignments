function calcTip(billAmount) {
// Calculate tip using ternary operator
const tip = billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;
return tip;
}

// Display a message that includes the bill amount, the tip amount, and the total cost (bill plus tip).
function displayTotal(billAmount) {
const tip = calcTip(billAmount);
const totalCost = billAmount + tip;
console.log(`The bill was $${billAmount}, the tip was $${tip.toFixed(2)}, and the total value is $${totalCost.toFixed(2)}`);
}
//Answer chnages if bill price is changed 
const bill = 275;
displayTotal(bill);

// Test Function with $100 bill
const testBill = 100;
const testTip = calcTip(testBill);
console.log(`Test bill: $${testBill}, tip: $${testTip.toFixed(2)}`);
