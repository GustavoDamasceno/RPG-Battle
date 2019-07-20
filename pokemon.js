var userHP = 100;
var opHP = 100;
var opAttacks = [thunderShock, Shock, ember, tackkle];  
var playerMove = 0;


function waterCannon() {
  if(playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1); 
    if(miss == 1) {
      document.getElementById('message').innerHTML = " Blastoise's attack missed! ";
    }
    else {
      document.getElementById('message').innerHTML = " Blastoise used water cannon "; 
      var critical = Math.floor((Math.random() * 10) + 1); 
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 30; 
        }
      }
      else{
        opHP = opHP - 30; 
      }
      if(opHP < 0){ opHP = 0} 
        document.getElementById('apHP').innerHTML = opHP; 
      if(opHP == 0){
        document.getElementById('message').innerHTML = " Pikachu está fora! "; 
        var trocarImg = document.getElementById('photopika');
        trocarImg.src="https://media.giphy.com/media/3oKIPsoRmzEfUUe8JG/giphy.gif";
      }
    }
    //wait();
    playerMove = 1; // update player move
}
}

function waterPulse() {
  if(playerMove == 0 && userHP != 0) {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used water pulse ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 20;
        }
      }
      else{
        opHP = opHP - 20;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " pikachu2 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Pikachu está fora! ";
      var trocarImg = document.getElementById('photopika');
      trocarImg.src="https://media.giphy.com/media/3oKIPsoRmzEfUUe8JG/giphy.gif";
    }
  }
  //wait();
  playerMove = 1;
}
}

function surf() {
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used surf ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 10;
        }
      }
      else{
        opHP = opHP - 10;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Pikachu está fora! ";
      var trocarImg = document.getElementById('photopika');
      trocarImg.src="https://media.giphy.com/media/3oKIPsoRmzEfUUe8JG/giphy.gif";
    }
  }
  //wait();
  playerMove = 1;
}
}
function tackle() {
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used tackle ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 5;
        }
      }
      else{
        opHP = opHP - 5;
      }
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
  //document.getElementById('message').innerHTML = " Pikachu4 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Pikachu está fora! ";
      var trocarImg = document.getElementById('photopika');
      trocarImg.src="https://media.giphy.com/media/3oKIPsoRmzEfUUe8JG/giphy.gif";
    }
  }
  //wait();
  playerMove = 1;
}
}



/* Movimentação do oponente */

function thunderShock() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if(miss == 1 ) {
  document.getElementById('message').innerHTML = " Pikachu's attack missed! " // attack missed
  }
  else {
  document.getElementById('message').innerHTML = " Pikachu used thunder Shock " // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
      if(critical == 4){
        for(var x = 0; x < 2; x++){ // yes critical
          userHP = userHP - 30;
        }
      }
      else{
        userHP = userHP - 30; // no critical
      }
  if(userHP < 0) { userHP = 0} // faint
  document.getElementById('myHP').innerHTML = userHP; // update hp
    if(userHP == 0) { // fainted
      document.getElementById('message').innerHTML = " Blastoise está fora! " // fainted
    }
  }
}

function Shock() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Pikachu's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Pikachu used Shock "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 20;
      }
    }
    else{
      userHP = userHP - 20;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise está fora! "
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Pikachu's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Pikachu used ember "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 10;
      }
    }
    else{
      userHP = userHP - 10;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise está fora! "
    }
  }
}

function tackkle() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Pikachu's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Pikachu used tackle "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 5;
      }
    }
    else{
      userHP = userHP - 5;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise está fora! "
    }
  }
}



function compPokemon() { // continue
  if(playerMove == 1 && opHP != 0) { // whos move
  var move = Math.floor((Math.random() * 4) + 1); // choose move randomly
    opAttacks[move](); // call attack from array
    playerMove = 0; // update player move
  }
}
