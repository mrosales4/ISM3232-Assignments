// U22978120

function calcTip(billAmount) {
// Calculate tip using ternary operator
const tip = (billAmount >= 50 && billAmount <= 300) ? billAmount * 0.15 : billAmount * 0.2;
return tip;
}

// Display a message that includes the bill amount, the tip amount, and the total cost (bill plus tip).
function displayTotal(billAmount) {
const tip = calcTip(billAmount);
const totalCost = billAmount + tip;
console.log(`The bill was $${billAmount.toFixed(2)}, the tip was $${tip.toFixed(2)}, and the total value is $${totalCost.toFixed(2)}`);
}
//Answer chnages if bill price is changed 
const bill = 275;
displayTotal(bill);

// Test Function with $100 bill
const testBill = 100;
const testTip = calcTip(testBill);
console.log(`Test bill: $${testBill.toFixed(2)}, tip: $${testTip.toFixed(2)}`);

//test data values for arrays 
const bills1 = [275, 40, 430]; // data set 1
const bills2 = [125, 555, 44]; // data set 2

// calculating bills total for data set 1
const tips1 = bills1.map(calcTip);
const totals1 = bills1.map((bill, index) => bill + tips1[index]);

//calculating bills total for data set 2
const tips2 = bills2.map(calcTip);
const totals2 = bills2.map((bill, index) =>bill + tips2[index]);

//displaying the arrays for data set 1
console.log("Data Set 1:");
console.log("Bill amounts:", bills1.map(bill => bill.toFixed(2)));
console.log("Tip amounts:", tips1.map(tip => tip.toFixed(2)));
console.log("total costs:", totals1.map(total => total.toFixed(2)));

//desplaying the arrays for data set 2
console.log("Data Set 2:");
console.log("Bill amounts:", bills2.map(bill => bill.toFixed(2)));
console.log("Tip amounts:", tips2.map(tip => tip.toFixed(2)));
console.log("Total costs:", totals2.map(total => total.toFixed(2)));


