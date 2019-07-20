const form = document.forms[0];
const payment = form.elements.plan;

payment.forEach(function(pembayaran) {
  pembayaran.addEventListener('change', function() {
    if (form.plan.value === 'Monthly') {
      document.querySelector('.form__total').textContent = '30$';
      document.querySelector('.form__pay span').textContent = '30$';
    }

    if (form.plan.value === 'Annually') {
      document.querySelector('.form__total').textContent = '300$';
      document.querySelector('.form__pay span').textContent = '300$';
    }
  });
});

// enable button !!!!!!
const payButton = form.elements.submit;
const money = document.querySelector('.form__pay span');
if (money.textContent != '$0') {
  payButton.disabled = false;
}

// payPAl Amount Bug
//  need help in this :(((

const paypalLink = document.querySelector('a.form__cc-heading');
paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${money}`);

// feature-accordition

const questions = document.querySelectorAll('.accordion');

questions.forEach(function(add) {
  add.addEventListener('click', function() {
    add.classList.toggle('accordion--active');
  });
});
