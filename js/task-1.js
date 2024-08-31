const itemEl = document.querySelectorAll("li.item");
console.log("Number of categories:", itemEl.length);

itemEl.forEach((item) => {
  const titleEl = item.firstElementChild;
  console.log("Category:", titleEl.textContent);
  const listEl = item.lastElementChild;
  console.log("Elements:", listEl.children.length);
});
