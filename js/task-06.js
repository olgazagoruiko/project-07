const inputEl = document.querySelector('#validation-input');
const countLetters = inputEl.getAttribute('data-length');
console.log(countLetters);

inputEl.addEventListener('blur', onInputChange);


function onInputChange(event) {
  const textInput = event.currentTarget.value;
  if (textInput.length <= countLetters) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  };
}