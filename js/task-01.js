const сategories = document.querySelectorAll('#categories>.item');
console.log(`Number of categories: ${сategories.length}`);

сategories.forEach(сategory => {
  const categoryName = сategory.firstElementChild.innerHTML;
  console.log(`Category: ${categoryName}`);
  const сategoryCountElements = сategory.lastElementChild.children.length;
  console.log(`Elements: ${сategoryCountElements}`);
});
