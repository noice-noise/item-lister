// ITEM LISTER

const contentArea = document.getElementById("contentArea");
const itemList = document.getElementById("itemList");
const addItemForm = document.getElementById("addItemForm");
const addItemInput = document.getElementById("addItemInput");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", handleSearch);

itemList.addEventListener("click", handleDeleteItem);

const itemTemplate = Array.from(document.getElementsByClassName("item"))[0];

addItemForm.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  if (addItemInput.value.trim() == 0) {
    console.log("0");
    return;
  }

  const value = addItemInput.value;
  addItemInput.value = ""; // clear input
  console.log(value);

  const list = document.createElement("li");
  list.innerHTML = itemTemplate.innerHTML;
  list.className = itemTemplate.className;
  list.firstChild.textContent = value;
  itemList.appendChild(list);
}

console.log(document.getElementsByClassName("btn-delete")[0].className);

function handleDeleteItem(e) {
  if (e.target.classList.contains("btn-delete")) {
    console.log("Delete");
    const li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

function handleSearch(e) {
  console.log(e.target.value);

  let text = e.target.value.toLowerCase();
  console.log("Text: " + text);

  const items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
