document.getElementById("calcBtn").addEventListener("click", () => {
  const priceInput = document.getElementById("price").value;
  const discountInput = document.getElementById("discount").value;

  const price = Number(priceInput);
  const discount = Number(discountInput);

  if (
    priceInput.trim() === "" ||
    discountInput.trim() === "" ||
    Number.isNaN(price) ||
    Number.isNaN(discount) ||
    price < 0 ||
    discount < 0
  ) {
    document.getElementById("result").textContent =
      "Введіть коректні невід'ємні значення ціни та знижки";
    return;
  }

  const clampedDiscount = Math.min(discount, 100);
  const finalPrice = (price - (price * clampedDiscount) / 100).toFixed(2);

  document.getElementById("result").textContent =
    "Підсумкова ціна: " + finalPrice + " грн";
});
