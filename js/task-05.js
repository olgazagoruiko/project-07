const inputEl = document.querySelector('#name-input');
const spamEl = document.querySelector('#name-output');
if (inputEl.value === '') {
  spamEl.textContent = 'незнайомець'
}
inputEl.addEventListener('input', onTextChange);
 
function onTextChange(event) {
  // console.log(event.currentTarget.value);
  console.log(inputEl.value);
  spamEl.textContent = event.currentTarget.value;
} 

