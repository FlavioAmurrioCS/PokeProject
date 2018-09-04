function getpokemon() {
  let num = document.getElementById("pokenum").value;
  document.getElementById("pokename").innerHTML = `Getting pokemon #${num}...`;
  fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${num}/`, {
    credentials: "same-origin"
  })
    .then(response => response.json())
    .then(displayResults)
    .catch(err => console.log(err));
}

function displayResults(data) {
  console.log(data);
  document.getElementById("pokename").innerHTML = data.name;
  createDiv(data.name, "div1", "top");
  createH(data.name, data.name, 1);
  for (const key in data.sprites)
    if (data.sprites.hasOwnProperty(key) && data.sprites[key])
      createImg(data.sprites[key], data.name);
}

function createP(str) {
  var para = document.createElement("p");
  var node = document.createTextNode(str);
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
}
function createH(str, parentId, size = 1) {
  var para = document.createElement(`h${size}`);
  var node = document.createTextNode(str);
  para.appendChild(node);
  var element = document.getElementById(parentId);
  element.appendChild(para);
}
function createImg(src, parentId) {
  var image = document.createElement("img");
  var imageParent = document.getElementById(parentId);
  image.src = src;
  imageParent.appendChild(image);
}
function createDiv(id, parentId, position = "bottom") {
  var div = document.createElement("div");
  div.id = id;
  var divParent = document.getElementById(parentId);
  if (position === "bottom") divParent.appendChild(div);
  else divParent.insertBefore(div, divParent.firstChild);
}
