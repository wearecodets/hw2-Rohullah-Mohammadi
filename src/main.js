
const amount = document.querySelector('.form__total span');
const paypalLink = document.querySelector('a.form__cc-heading');
function paypalweb() {
  paypalLink.setAttribute(
    'href',
    `https://paypal.me/nikosolihin/${amount.textContent}`
  );
}
paypalLink.addEventListener('click', paypalweb);

const inputs = document.querySelectorAll('input[name="plan"]');
const annual = document.querySelector('input[value="Annually"]');
const monthly = document.querySelector('input[value="Monthly"]');
function changeCost() {
  if (annual.checked === true) {
    amount.textContent = '300';
  } else {
    amount.textContent = '30';
  }
}
inputs.forEach(input => input.addEventListener('click', changeCost));

console.log('Hello, world!');
const subButton = document.querySelector('button[type="submit"]');

const buttonAmount = document.querySelector('button span');
if (amount.textContent != '$0') {
  subButton.disabled = false;
  buttonAmount.textContent = amount.textContent;
}
// console.log('Hello, world!');
const accs = document.querySelectorAll('.accordion');
// console.log(accs);
function toggleFunction() {
  this.classList.toggle('accordion--active');
}
accs.forEach(acc => acc.addEventListener('click', toggleFunction));
