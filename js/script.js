document.addEventListener("DOMContentLoaded", function () {
    // Select total price
    const totalPrice = document.querySelector(".total");
  
    // Function to update the total price
    function updateTotal() {
      let total = 0;
      document.querySelectorAll(".card").forEach((item) => {
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        const unitPrice = parseFloat(item.querySelector(".unit-price").textContent.replace("$", ""));
        total += quantity * unitPrice;
      });
      totalPrice.textContent = `${total} $`;
    }
  
    // Select all product cards
    document.querySelectorAll(".card").forEach((item) => {
      const plusBtn = item.querySelector(".fa-plus-circle");
      const minsBtn = item.querySelector(".fa-minus-circle");
      const quantitySpan = item.querySelector(".quantity");
      const deleteBtn = item.querySelector(".fa-trash-alt");
      const likeBtn = item.querySelector(".fa-heart");
  
      // Increase quantity
      plusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = quantity + 1;
        updateTotal();
      });
  
      // Decrease quantity (prevent negative)
      minsBtn.addEventListener("click", () => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
          quantitySpan.textContent = quantity - 1;
          updateTotal();
        }
      });
  
      // Delete item from cart
      deleteBtn.addEventListener("click", () => {
        item.remove();
        updateTotal();
      });
  
      // Like button toggle
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
      });
    });
  
    // Initial total price calculation
    updateTotal();
  });
  