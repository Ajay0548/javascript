
console.log("--- Initializing Inventory System ---");

// 1. Initial inventory
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// 2. Get new product details from the user
const inputName = prompt("Enter new product name:");
const inputPrice = Number(prompt("Enter product price:"));

// 3. Validate input
if (
  inputName === null ||
  inputName.trim() === "" ||
  !Number.isFinite(inputPrice) ||
  inputPrice <= 0
) {
  console.log("Invalid product details. Product not added.");
} else {
  const newProduct = {
    name: inputName.trim(),
    price: inputPrice
  };

  inventory.push(newProduct);
}

// 4. Determine the product category
function getCategory(price) {
  let category;

  if (price < 50) {
    category = "Budget";
  } else if (price <= 200) {
    category = "Standard";
  } else {
    category = "Premium";
  }

  // Use switch to assign the category badge
  switch (category) {
    case "Budget":
      return "Budget";
    case "Standard":
      return "Standard";
    case "Premium":
      return "Premium";
    default:
      return "Unknown";
  }
}

// 5. Calculate financial statistics
function calculateTotal(items) {
  let total = 0;

  for (const item of items) {
    if (!Number.isFinite(item.price) || item.price <= 0) {
      continue;
    }

    total += item.price;
  }

  return total;
}

// Regular function with default tax rate
function calculateTax(amount, taxRate = 0.18) {
  return amount * taxRate;
}

// Arrow function with default discount rate
const calculateDiscount = (amount, discountRate = 0.10) => {
  return amount * discountRate;
};

// 6. Print inventory roster
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {
  console.log(
    `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
  );
});

// 7. Total inventory value
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

// Calculate tax and discount for reuse in future reports
const taxAmount = calculateTax(totalValue);
const discountAmount = calculateDiscount(totalValue);

// 8. Filter affordable items
const affordableItems = inventory.filter(item => {
  return item.price < 200;
});

console.log(
  `Filtered Affordable Items (Under $200): ${JSON.stringify(
    affordableItems.map(item => item.name)
  )}`
);

// 9. Generate formatted report
const report = inventory.map(item => {
  return `${item.name.toUpperCase()}: $${item.price}`;
});

console.log(`Formatted Report List: ${JSON.stringify(report)}`);

// 10. Demonstrate a search loop with break and continue
const searchName = "Monitor";
let foundProduct = null;

for (const item of inventory) {
  if (!item.name) {
    continue;
  }

  if (item.name.toLowerCase() === searchName.toLowerCase()) {
    foundProduct = item;
    break;
  }
}

// The taxAmount and discountAmount are available for further use.
