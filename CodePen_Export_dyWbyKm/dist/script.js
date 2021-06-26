var elm = document.getElementsByTagName("header");

for (const e of elm) {
  const node = document.createTextNode(e.innerText);
  const newLi = document.createElement("a");
  newLi.appendChild(node);
  document.getElementById("test").appendChild(newLi);
  newLi.href = "#" + e.innerText;
  /it must have been the ID of a section/
  newLi.classList.add("list-group-item");
}