var whoseTurn = "O"

function makeGrid() {
  document.getElementById("difficulty").style.visibility = "hidden"
  for (i = 0; i < 9; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btnClass");
    btn.setAttribute("id", i);
    btn.setAttribute("innerHTML", "");
    document.getElementById("grid-container").appendChild(btn)
    document.getElementById(i).onclick = thisClick
  }//end For loop
}//end function

var thisClick = function(){
  var thisBtn = document.getElementById(this.id);
  //Check to see that the square is available.
  if(thisBtn.innerHTML != ""){
    alert("That square is taken!!");
    return 0;
  }
  thisBtn.innerHTML = whoseTurn;
  if(checkForWin()){
    alert(whoseTurn + "wins the game!!")
  }
  switchTurn();
}

function switchTurn(){
  if(whoseTurn == "O"){
    whoseTurn = "X"
  }else{
    whoseTurn = "O"
  }
}
function checkForWin(){
  for( i=0 ; i<8 ; i += 3){
    var startingSquare = document.getElementById(i);
    var secondSquare = document.getElementById(i+1);
    var thirdSquare = document.getElementById(i+2);
    if((startingSquare.innerHTML == secondSquare.innerHTML)
      && (secondSquare.innerHTML == thirdSquare.innerHTML)
      && (startingSquare.innerHTML != "")
      && (secondSquare.innerHTML != "")
      && (thirdSquare.innerHTML != "")){
      return true;
    }//end if
  }//end loop
}
