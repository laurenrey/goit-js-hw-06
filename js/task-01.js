const categoriesRef = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesRef.length}`);

const categoryInfo = [...categoriesRef]
  .map(
    (categories) => `Category: ${categories.children[0].textContent} 
Element: ${categories.children[1].children.length}`
  )
  .join("\n");

console.log(categoryInfo);
