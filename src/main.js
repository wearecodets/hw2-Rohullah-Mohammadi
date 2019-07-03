// console.log('Hello, world!');
const amount = document.querySelector('.form__total span');
// console.log(amount);
// const form = document.querySelector('.form');
// console.log(form.plan);
const inputs = document.querySelectorAll('input[name="plan"]');
const annual = document.querySelector('input[value="Annually"]');
const monthly = document.querySelector('input[value="Monthly"]');
// console.log(inputs);
// console.log(annual);
// console.log(monthly);
function changeCost() {
  if (annual.checked === true) {
    amount.textContent = '300';
  } else {
    amount.textContent = '30';
  }
}
inputs.forEach(input => input.addEventListener('click', changeCost));
