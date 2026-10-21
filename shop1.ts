function addNumbers(): void {
  const units = document.querySelectorAll(".unit-price") as NodeListOf<HTMLElement>;
  const quantities = document.querySelectorAll("[name='quantity']") as NodeListOf<HTMLInputElement>;
  const output1 = document.getElementById("payment") as HTMLInputElement | null;
  const output2 = document.getElementById("discount") as HTMLInputElement | null;

  let sum = 0;

  for (let i = 0; i < units.length; i++) {
    const unitPriceElement = units[i];
    const quantityElement = quantities[i];

    if (unitPriceElement && quantityElement) {
      const unitPrice = parseFloat(unitPriceElement.textContent || "0");
      const quantity = parseFloat(quantityElement.value || "0");
      sum += unitPrice * quantity;
    }
  }

  if (output1) {
    output1.value = sum.toString();
  }
  if (output2) {
    output2.value = (sum * 0.9).toString();
  }
}

document.getElementById("calculate_total")?.addEventListener('click', addNumbers);