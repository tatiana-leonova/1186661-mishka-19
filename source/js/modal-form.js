var cardModal = document.querySelector('.cart-modal');
var productBlock = document.querySelector('.product');
var orderButton = document.querySelector('.week-product__button');

  if (cardModal) {
    if (productBlock) {
      productBlock.addEventListener('click', openOrderForm);
    }

    if (orderButton) {
      orderButton.addEventListener('click', openOrderForm);
    }

    cardModal.addEventListener('click', closeOrderForm);
    window.addEventListener('keydown', closeOrderForm);
  }

  function openOrderForm(event) {
    var element = event.target;

    if (
      element.classList.contains('product__button-card') ||
      element.classList.contains('week-product__button')
    ) {
      event.preventDefault();
      cardModal.classList.add('cart-modal--opened');
    }
  }

  function closeOrderForm(event) {
    let element = event.target;

    if (element.classList.contains('cart-modal') || event.keyCode === 27) {
      cardModal.classList.remove('cart-modal--opened');
    }
  }
