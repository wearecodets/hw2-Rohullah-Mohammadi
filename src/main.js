const monthlyCost = 30;
const annualCost = 25;
let amount = 0;

const form = document.querySelector('.form');
const total = document.querySelector('.form__total');
const paypalLink = document.querySelector('a.form__cc-heading');

function calculateTotal() {
  const frequency = form.plan.value;
  amount = frequency === 'Monthly' ? monthlyCost : annualCost * 12;
}

function updateTotal() {
  form.submit.disabled = false;
  total.textContent = `$${amount}`;
  form.submit.textContent = `Pay $${amount} Now`;
  paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${amount}`);
}

form.plan.forEach(function(plan) {
  plan.addEventListener('change', function() {
    calculateTotal();
    updateTotal();
  });
});

const accordions = document.querySelectorAll('.accordion');
const activeClass = 'accordion--active';

accordions.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.classList.contains(activeClass)) {
      // I'm currently active, so just close myself.
      item.classList.remove(activeClass);
    } else {
      // I'm not active, so close the other first.
      accordions.forEach(function(others) {
        others.classList.remove(activeClass);
      });
      // Then activate myself.
      item.classList.add(activeClass);
    }
  });
});
