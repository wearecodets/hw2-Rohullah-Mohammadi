// console.log('Hello, world!');
const accs = document.querySelectorAll('.accordion');
// console.log(accs);
function toggleFunction() {
  this.classList.toggle('accordion--active');
}
accs.forEach(acc => acc.addEventListener('click', toggleFunction));
