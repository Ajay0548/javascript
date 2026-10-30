
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter bill amount: ", (billInput) => {
  rl.question("Enter tip percentage: ", (tipInput) => {
    const billAmount = Number(billInput);
    const tipPercentage = Number(tipInput);

    const calculatedTip = billAmount * tipPercentage / 100;
    const totalAmount = billAmount + calculatedTip;

    console.log(`Subtotal: $${billAmount}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${calculatedTip}`);
    console.log(`Total Amount to Pay: $${totalAmount}`);

    rl.close();
  });
});
