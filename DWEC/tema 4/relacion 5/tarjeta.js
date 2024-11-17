const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('card-holder');
const expirationMonth = document.getElementById('expiration-month');
const expirationYear = document.getElementById('expiration-year');
const cvvInput = document.getElementById('cvv');

const cardNumberDisplay = document.querySelector('.card-number');
const cardHolderDisplay = document.querySelector('.holder-name');
const expirationDateDisplay = document.querySelector('.expiration-date');

cardNumberInput.addEventListener('input', () => {
  cardNumberDisplay.textContent = cardNumberInput.value
    ? cardNumberInput.value
    : '#### #### #### ####';
});

cardHolderInput.addEventListener('input', () => {
  cardHolderDisplay.textContent = cardHolderInput.value
    ? cardHolderInput.value
    : 'FULL NAME';
});

expirationMonth.addEventListener('change', updateExpirationDate);
expirationYear.addEventListener('change', updateExpirationDate);

function updateExpirationDate() {
  const month = expirationMonth.value || 'MM';
  const year = expirationYear.value ? expirationYear.value.slice(-2) : 'YY';
  expirationDateDisplay.textContent = `${month}/${year}`;
}

document.getElementById('card-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    !cardNumberInput.value.match(/^\d{16}$/) ||
    !cardHolderInput.value ||
    !expirationMonth.value ||
    !expirationYear.value ||
    !cvvInput.value.match(/^\d{3}$/)
  ) {
    alert('Please fill in all fields correctly.');
  } else {
    alert('Payment Successful!');
  }
});
