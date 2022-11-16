const liElements = document.querySelectorAll('.item');
console.log(liElements);
console.log('В списку всього категорій:', liElements.length);
const arrCategories = [];
for (let i = 0; i < liElements.length; i += 1){
  const titleElem = liElements[i].querySelector('h2');
  const liElems = liElements[i].querySelectorAll('li');
  const obj = {
    "категорія": titleElem.textContent,
    "кількість елементів":liElems.length,
  }
  arrCategories.push(obj);
}
console.log(arrCategories);
console.table(arrCategories);