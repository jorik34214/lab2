document.getElementById("calcBtn").addEventListener("click", () => {
  const price = Number(document.getElementById("price").value);
  const discount = Number(document.getElementById("discount").value);

  const finalPrice = price - (price * discount) / 100;

  document.getElementById("result").textContent =
    "Підсумкова цiна: " + finalPrice + " грн"; 
});
