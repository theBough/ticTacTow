function makeGrid() {
  for (i = 0; i < 9; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btnClass");
    btn.setAttribute("id", i);
    btn.setAttribute("innerHTML", "");
    document.getElementById("grid-container").appendChild(btn)
  }//end For loop
}//end function
