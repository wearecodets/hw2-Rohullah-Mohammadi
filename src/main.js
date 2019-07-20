const form = document.forms[0];
const payment = form.elements.plan;

payment.forEach(function(paying) {
  paying.addEventListener('change', function() {
    if (form.plan.value === 'Annually') {
      document.querySelector('.form__total').textContent = '$300';
      document.querySelector('.form__pay span').textContent = '$300';
    }
    if (form.plan.value === 'Monthly') {
      document.querySelector('.form__total').textContent = '$30';
      document.querySelector('.form__pay span').textContent = '$30';
    }
  });
});

// enable button

const payButton = form.elements.submit;
const money = document.querySelector('.form__pay span');
if (money.textContent != '$0') {
  payButton.disabled = false;
}

// payPAl Amount Bug

// const paypalLink = document.querySelector('a.form__cc-heading');
// paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${money}`);

const paypalLink = document.querySelector('a');
function paypalweb() {
  paypalLink.removeAttribute('href');
  paypalLink.setAttribute(
    'href',
    `https://paypal.me/nikosolihin/${amount.textContent}`
  );
}
paypalLink.addEventListener('click', paypalweb);

// feature-accordition

const questions = document.querySelectorAll('.accordion');

questions.forEach(function(add) {
  add.addEventListener('click', function() {
    add.classList.toggle('accordion--active');
  });
});
