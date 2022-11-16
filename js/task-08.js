const inputEl = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('[data-action-render]');
const buttonClear = document.querySelector('[data-action-clear]');
const divContainer = document.querySelector('#boxes');



buttonCreate.addEventListener('click', createBoxes);
buttonClear.addEventListener('click', destroyBoxes);


function getRandomRgb() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function createBoxes() {
  const amount = inputEl.value;
  const divElements = [];
  let widthElemDiv = '30px';
  let heightElemDiv='30px'
  for (let i = 0; i < amount; i += 1){
    const divElem = document.createElement('div');
    divElem.style.width = widthElemDiv;
    divElem.style.height = heightElemDiv;
    divElem.style.backgroundColor = getRandomRgb();
    divElements.push(divElem);
    
    widthElemDiv = Number.parseInt(widthElemDiv) + 10 + 'px';
    heightElemDiv =Number.parseInt(heightElemDiv) + 10 + 'px'; ;
  }
  divContainer.append(...divElements);
}

function destroyBoxes() {
  divContainer.innerHTML = '';
}