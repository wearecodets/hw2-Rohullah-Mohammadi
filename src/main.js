// console.log('Hello, world!');
const amount = document.querySelector('.form__total span');
// console.log(amount);
const paypalLink = document.querySelector('a.form__cc-heading');
console.log(paypalLink);
// paypalLink.href = 'www.goolge.com';
function paypalweb() {
  // paypalLink.removeAttribute('href');
  paypalLink.setAttribute(
    'href',
    `https://paypal.me/nikosolihin/${amount.textContent}`
  );
}
paypalLink.addEventListener('click', paypalweb);
