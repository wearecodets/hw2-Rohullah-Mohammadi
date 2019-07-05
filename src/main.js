
console.log('Hello, world!');
const amount = document.querySelector('.form__total span');
const subButton = document.querySelector('button[type="submit"]');

const buttonAmount = document.querySelector('button span');
// console.log(buttonAmount.textContent);
// console.log(subButton.disabled);
// console.log(amount);
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
