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
  }//end if
  thisBtn.innerHTML = whoseTurn;
  if(checkForWin()){
    alert(whoseTurn + "wins the game!!")
  }//end if
  switchTurn();
  aiTurn();
}//end function
function aiTurn(){
  if(canAIWIn()){
    
  }else if(checkForBlock()){
    
  }else{
    playRandom()
  }
  switchTurn();
}
function checkForBlock(){
  
}
function canAIWIn(){
  /*we are looking for 2 taken spots and an open spot
  on any given row or column or diagonal
  */
  var squareOne = document.getElementById("0")
  var squareTwo = document.getElementById("1")
  var squareThree = document.getElementById("2")

  if(squareOne.innerHTML == whoseTurn && squareTwo.innerHTML == whoseTurn && squareThree.innerHTML == ""){
    squareThree.innerHTML = whoseTurn;
    return true;
  }
  if(squareOne.innerHTML == whoseTurn && squareTwo.innerHTML == "" && squareThree.innerHTML == whoseTurn){
    squareTwo.innerHTML = whoseTurn;
    return true;
  }
  if(squareOne.innerHTML == "" && squareTwo.innerHTML == whoseTurn && squareThree.innerHTML == whoseTurn){
    squareThree.innerHTML = whoseTurn;
    return true;
  }
}
function playRandom(){
  var rndNum = Math.random()*9
  rndNum = Math.floor(rndNum)
  while(document.getElementById(rndNum).innerHTML !==""){
    rndNum = Math.random()*9
    rndNum = Math.floor(rndNum)
  }//end While Loop
  document.getElementById(rndNum).innerHTML = whoseTurn;
}
function switchTurn(){
  if(whoseTurn == "O"){
    whoseTurn = "X"
  }else{
    whoseTurn = "O"
  }
}
function checkForWin(){
  if(checkForHorizontalWin() || checkForDiagonalWin() || checkForVerticalWin()){
    return true;
  }
}
function checkForHorizontalWin(){
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
function checkForVerticalWin(){
   for( i=0 ; i<3 ; i += 1){
    var startingSquare = document.getElementById(i);
    var secondSquare = document.getElementById(i+3);
    var thirdSquare = document.getElementById(i+6);
    if((startingSquare.innerHTML == secondSquare.innerHTML)
      && (secondSquare.innerHTML == thirdSquare.innerHTML)
      && (startingSquare.innerHTML != "")
      && (secondSquare.innerHTML != "")
      && (thirdSquare.innerHTML != "")){
      return true;
    }//end if
  }//end loop
}
function checkForDiagonalWin(){
  //Checking diagonal topleft to bottom Right
    var startingSquare = document.getElementById(0);
    var secondSquare = document.getElementById(4);
    var thirdSquare = document.getElementById(8);
    if((startingSquare.innerHTML == secondSquare.innerHTML)
      && (secondSquare.innerHTML == thirdSquare.innerHTML)
      && (startingSquare.innerHTML != "")
      && (secondSquare.innerHTML != "")
      && (thirdSquare.innerHTML != "")){
      return true;
    }//end if

  //Checking top Right to bottom left
    startingSquare = document.getElementById(2);
    secondSquare = document.getElementById(4);
    thirdSquare = document.getElementById(6);
    if((startingSquare.innerHTML == secondSquare.innerHTML)
      && (secondSquare.innerHTML == thirdSquare.innerHTML)
      && (startingSquare.innerHTML != "")
      && (secondSquare.innerHTML != "")
      && (thirdSquare.innerHTML != "")){
      return true;
    }//end if
}
