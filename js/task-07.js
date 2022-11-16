const inputEl = document.querySelector('#font-size-control');
const spamEl = document.querySelector('#text');
inputEl.addEventListener('change', onChangeFontSize);

function onChangeFontSize(event) {
  console.log(event.currentTarget.value);
  spamEl.style.fontSize =event.currentTarget.value+'px' ;
}