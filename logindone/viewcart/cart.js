document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const billingContainer = document.getElementById('billing-section');

  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      billingContainer.style.display = 'none'; // Hide billing section if cart is empty
    } else {
      billingContainer.style.display = 'block'; // Show billing section if cart is not empty
      cart.forEach(product => {
        cartItemsContainer.innerHTML += `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-details">
              <h3>${product.name}</h3>
              <p>Price: ₹${product.price}</p>
              <button onclick="removeFromCart(${product.id})">Remove</button>
            </div>
          </div>
        `;
        totalPrice += product.price;
      });
    }
    totalPriceElement.textContent = totalPrice;
    updateBillingDetails(totalPrice);
  }

  function updateBillingDetails(totalPrice) {
    const taxes = (totalPrice * 0.18).toFixed(2); // 18% tax -- acc to formulae 18% tax ---
    const finalTotal = (parseFloat(totalPrice) + parseFloat(taxes)).toFixed(2);

    billingContainer.innerHTML = `
      <h2>Billing Summary</h2>
      <p>Subtotal: ₹${totalPrice}</p>
      <p>Taxes (18%): ₹${taxes}</p>
      <p><strong>Total: ₹${finalTotal}</strong></p>
      <button id="checkout-button">Proceed to Checkout</button>
    `;

    document.getElementById('checkout-button').addEventListener('click', () => {
      alert('Redirecting to checkout...');
      // Redirect to a checkout page  --- abhi
    });
  }

  // Remove product from cart---abhi
  window.removeFromCart = function (productId) {
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    alert('Product removed from cart.');
  };

  // Initial render
  updateCartUI();
});
