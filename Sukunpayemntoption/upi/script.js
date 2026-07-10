const debitCardBtn = document.getElementById('debit-card-btn');
const creditCardBtn = document.getElementById('credit-card-btn');
const upiBtn = document.getElementById('upi-btn');

const cardInfo = document.getElementById('card-info');
const upiInfo = document.getElementById('upi-info');

const card = document.querySelector('.card');
const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('card-holder');
const expiryDateInput = document.getElementById('expiry-date');
const cvvInput = document.getElementById('cvv');

const cardNumberDisplay = document.getElementById('card-number-display');
const cardHolderDisplay = document.getElementById('card-holder-display');
const expiryDateDisplay = document.getElementById('expiry-date-display');
const cvvDisplay = document.getElementById('cvv-display');

// Event listeners for card information inputs
cardNumberInput.addEventListener('input', () => {
    cardNumberDisplay.textContent = formatCardNumber(cardNumberInput.value);
});

cardHolderInput.addEventListener('input', () => {
    cardHolderDisplay.textContent = cardHolderInput.value || 'Your Name';
});

expiryDateInput.addEventListener('input', () => {
    expiryDateDisplay.textContent = expiryDateInput.value || 'MM/YY';
});

cvvInput.addEventListener('focus', () => {
    card.style.transform = 'rotateY(180deg)';
});

cvvInput.addEventListener('blur', () => {
    card.style.transform = 'rotateY(0deg)';
});

cvvInput.addEventListener('input', () => {
    cvvDisplay.textContent = cvvInput.value || '###';
});

// Toggle between payment methods
debitCardBtn.addEventListener('click', () => {
    toggleActive(debitCardBtn);
    showCardInfo();
});

creditCardBtn.addEventListener('click', () => {
    toggleActive(creditCardBtn);
    showCardInfo();
});

upiBtn.addEventListener('click', () => {
    toggleActive(upiBtn);
    showUpiInfo();
});

// Helper functions
function toggleActive(button) {
    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function showCardInfo() {
    cardInfo.classList.remove('hidden');
    upiInfo.classList.add('hidden');
}

function showUpiInfo() {
    upiInfo.classList.remove('hidden');
    cardInfo.classList.add('hidden');
}

function formatCardNumber(value) {
    return value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
}
