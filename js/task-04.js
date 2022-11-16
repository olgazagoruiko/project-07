const counterValue = document.querySelector('#value');
console.log(counterValue);
let count = 0;

function increment() {
  count += 1;
  counterValue.textContent = count;
  return count;
};

function decrement() {
  count -= 1;
  counterValue.textContent = count;
   return count;
};

document.querySelector('[data-action="increment"]').addEventListener('click', increment);
document.querySelector('[data-action="decrement"]').addEventListener('click', decrement);