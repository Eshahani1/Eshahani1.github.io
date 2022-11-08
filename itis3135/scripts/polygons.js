function getShape() {
    let side = prompt("The Elaborate Starfish would like you to choose a number 1-10");
    validateEntry();
  
  
    function validateEntry() {
      if (side > 10) {
        alert("Number is greater than 10 please try again")
        getShape();
      } else if (Math.sign(side) == -1) {
        side = Math.abs(side)
        side = Math.round(side)
        if(side == 1){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Henagon");
        }else if(side == 2){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Duogon");
        }else if(side == 3){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Triangle");
        }else if(side == 4){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Square");
        }else if(side == 5){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Pentagon");
        }else if(side == 6){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Hexagon");
        }else if(side == 7){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Heptagon");
        }else if(side == 8){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Octafon");
        }else if(side == 9){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Nonagon");
        }else{
        document.getElementById("answer").innerHTML = ("The polygon for you is a Decagon");
        }
      } else {
        if(side == 1){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Henagon");
        }else if(side == 2){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Duogon");
        }else if(side == 3){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Triangle");
        }else if(side == 4){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Square");
        }else if(side == 5){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Pentagon");
        }else if(side == 6){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Hexagon");
        }else if(side == 7){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Heptagon");
        }else if(side == 8){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Octafon");
        }else if(side == 9){
        document.getElementById("answer").innerHTML = ("The polygon for you is a Nonagon");
        }else{
        document.getElementById("answer").innerHTML = ("The polygon for you is a Decagon");
        }
      }
    }
  }
  
  
  