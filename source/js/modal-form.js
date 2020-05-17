const cardModal = document.querySelector(".cart-modal");
const weekProductButton = document.querySelector(".week-product__button");
const productButtonCards = document.querySelectorAll(".product__button-card");


  if (cardModal) {

    if (weekProductButton) {
      weekProductButton.addEventListener("click", openOrderForm);
    }

    productButtonCards.forEach(function(item) {
      item.addEventListener("click", openOrderForm);
    })

    cardModal.addEventListener("click", closeOrderForm);
    window.addEventListener("keydown", closeOrderForm);
  }

  function openOrderForm(event) {
    const element = event.target;

      event.preventDefault();
      cardModal.classList.add("cart-modal--opened");
  }

  function closeOrderForm(event) {
    const element = event.target;

    if (element.classList.contains("cart-modal") || event.keyCode === 27) {
      cardModal.classList.remove("cart-modal--opened");
    }
  }
