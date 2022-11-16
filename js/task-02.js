const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const elements = ingredients.map(item => {
  const liElem = document.createElement('li');
  liElem.textContent = item;
  return liElem;
});
console.log(elements);
const elementContainer = document.querySelector('#ingredients');
elementContainer.append(...elements);