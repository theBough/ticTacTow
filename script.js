function makeGrid(){
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "btnClass");
  btn.setAttribute("id","first");
  btn.setAttribute("innerHTML", "");

  document.getElementById("grid-container").appendChild(btn)
}
