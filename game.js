 // on click pokemon are moved to defenderArea if there is already a pokemon in playerArea
  
 
 $(document).ready(function() {
  $('#mario').click(function() {  
      if( $('#playerArea').find('.pokemon').length == 0 ) {
          $("#mario").appendTo("#playerArea");
          marioPlay = true;
        } else if( $('#defenderArea').find('.pokemon').length == 0 ) {
          $("#mario").appendTo("#defenderArea");
          marioDef = true;
        } else {
          alert("theres already two pokemon in battle")
        }

  
  });
});

$(document).ready(function() {
  $('#squirtle').click(function() {  
      if( $('#playerArea').find('.pokemon').length == 0 ) {
          $("#squirtle").appendTo("#playerArea");
          squirtPlay = true;
        } else if( $('#defenderArea').find('.pokemon').length == 0 ) {
          $("#squirtle").appendTo("#defenderArea");
          squirtDef = true;
        } else {
          alert("theres already two pokemon in battle")
        }

  
  });
});

$(document).ready(function() {
  $('#charmander').click(function() {  
      if( $('#playerArea').find('.pokemon').length == 0 ) {
          $("#charmander").appendTo("#playerArea");
          charPlay = true;
        } else if( $('#defenderArea').find('.pokemon').length == 0 ) {
          $("#charmander").appendTo("#defenderArea");
          charDef = true;
        } else {
          alert("theres already two pokemon in battle")
        }

  
  });
});

$(document).ready(function() {
  $('#bulbasaur').click(function() {  
      if( $('#playerArea').find('.pokemon').length == 0 ) {
          $("#bulbasaur").appendTo("#playerArea");
          bulbPlay = true;
        } else if( $('#defenderArea').find('.pokemon').length == 0 ) {
          $("#bulbasaur").appendTo("#defenderArea");
          bulbDef = true;
        } else {
          alert("theres already two pokemon in battle")
        }

  
  });
});






// Pokemon health and attack stats

  //health
  var squirtHp = 200;
  var charHp = 120;
  var bulbHp = 190;
  var marioHp = 300;
  var mewHp = 1000;

  //atttack
  var squirtAtk = 25;
  var charAtk = 40;
  var bulbAtk = 5;
  var marioAtk = 30;
  
  //counter
  var squirtCounter = 5;
  var charCounter = 30;
  var bulbCounter = 6;
  var marioCounter = 15;
  var mewCounter = 50;


  // is pokemon in playerArea?
  var squirtPlay = false;
  var charPlay = false;
  var bulbPlay = false;
  var marioPlay = false;

  // is pokemon in defenderArea?
  var squirtDef = false;
  var charDef = false;
  var bulbDef = false;
  var marioDef = false;
  var mewDef = false;

  var w = 1;
  var x = 1;
  var y = 1;
  var z = 1;

  var q = 0;

  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;

  // writing pokemon health to inner html
  
  document.getElementById("squirtleHp" ).innerHTML = squirtHp;
  document.getElementById("charmanderHp").innerHTML = charHp;
  document.getElementById("bulbasaurHp").innerHTML = squirtHp;
  document.getElementById("marioHp").innerHTML = marioHp;
  document.getElementById("mewHp").innerHTML = mewHp;


// the attack button function
  
$( "#attackBtn" ).click(function() {
if (squirtPlay == true && charDef == true) {
 document.getElementById("charmanderHp").innerHTML = charHp - squirtAtk;
 charHp = charHp - squirtAtk;
 x++; squirtAtk = 25 * x;
 document.getElementById("squirtleHp").innerHTML = squirtHp - charCounter;
 squirtHp = squirtHp - charCounter;
}
else if (squirtPlay == true && bulbDef == true) {
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - squirtAtk;
 bulbHp = bulbHp - squirtAtk;
 x++; squirtAtk = 25 * x;
 document.getElementById("squirtleHp").innerHTML = squirtHp - bulbCounter;
 squirtHp = squirtHp - bulbCounter;
}
else if (squirtPlay == true && marioDef == true) {
 document.getElementById("marioHp").innerHTML = marioHp - squirtAtk;
 marioHp = marioHp - squirtAtk;
 x++; squirtAtk = 25 * x;
 document.getElementById("squirtleHp").innerHTML = squirtHp - marioCounter;
 squirtHp = squirtHp - marioCounter;
}
else if (charPlay == true && squirtDef == true) {
 document.getElementById("squirtleHp").innerHTML = squirtHp - charAtk;
 squirtHp = squirtHp - charAtk;
 y++; charAtk = 40 * y;
 document.getElementById("charmanderHp").innerHTML = charHp - squirtCounter;
 squirtHp = squirtHp - marioCounter;
}
else if (charPlay == true && bulbDef == true) {
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - charAtk;
 bulbHp = bulbHp - charAtk;
 y++; charAtk = 40 * y;
 document.getElementById("charmanderHp").innerHTML = charHp - bulbCounter;
 charHp = charHp - bulbCounter;
}
else if (charPlay == true && marioDef == true) {
 document.getElementById("marioHp").innerHTML = marioHp - charAtk;
 marioHp = marioHp - charAtk;
 y++; charAtk = 40 * y;
 document.getElementById("charmanderHp").innerHTML = charHp - marioCounter;
 charHp = charHp - marioCounter;
}
else if (bulbPlay == true && squirtDef == true) {
 document.getElementById("squirtleHp").innerHTML = squirtHp - bulbAtk;
 squirtHp = squirtHp - bulbAtk;
 z++; bulbAtk = 5 * z;
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - squirtCounter;
 bulbHp = bulbHp - squirtCounter;
}
else if (bulbPlay == true && charDef == true) {
 document.getElementById("charmanderHp").innerHTML = charHp - bulbAtk;
 charHp = charHp - bulbAtk;
 z++; bulbAtk = 5 * z;
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - charCounter;
 bulbHp = bulbHp - charCounter;
}
else if (bulbPlay == true && marioDef == true) {
 document.getElementById("marioHp").innerHTML = marioHp - bulbAtk;
 marioHp = marioHp - bulbAtk;
 z++; bulbAtk = 5 * z;
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - marioCounter;
 bulbHp = bulbHp - marioCounter;
}
else if (marioPlay == true && squirtDef == true) {
 document.getElementById("squirtleHp").innerHTML = squirtHp - marioAtk;
 squirtHp = squirtHp - marioAtk;
 w++; marioAtk = 30 * w;
 document.getElementById("marioHp").innerHTML = marioHp - squirtCounter;
 marioHp = marioHp - squirtCounter;
}
else if (marioPlay == true && charDef == true) {
 document.getElementById("charmanderHp").innerHTML = charHp - marioAtk;
 charHp = charHp - marioAtk;
 w++; marioAtk = 30 * w;
 document.getElementById("marioHp").innerHTML = marioHp - charCounter;
 marioHp = marioHp - charCounter;
}
else if (marioPlay == true && bulbDef == true) {
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - marioAtk;
 bulbHp = bulbHp - marioAtk;
 w++; marioAtk = 30 * w;
 document.getElementById("marioHp").innerHTML = marioHp - bulbCounter;
 marioHp = marioHp - bulbCounter;
}
else if (charPlay == true && mewDef == true) {
 document.getElementById("mewHp").innerHTML = mewHp - charAtk;
 mewHp = mewHp - charAtk;
 y++; charAtk = 40 * y;
 document.getElementById("charmanderHp").innerHTML = charHp - mewCounter;
 charHp = charHp - mewCounter;
}
else if (marioPlay == true && mewDef == true) {
 document.getElementById("mewHp").innerHTML = mewHp - marioAtk;
 mewHp = mewHp - marioAtk;
 w++; marioAtk = 30 * w;
 document.getElementById("marioHp").innerHTML = marioHp - mewCounter;
 marioHp = marioHp - mewCounter;
}
else if (bulbPlay == true && mewDef == true) {
 document.getElementById("mewHp").innerHTML = mewHp - bulbAtk;
 mewHp = mewHp - bulbAtk;
 z++; bulbAtk = 5 * z;
 document.getElementById("bulbasaurHp").innerHTML = bulbHp - mewCounter;
 bulbHp = bulbHp - mewCounter;
}
else if (squirtPlay == true && mewDef == true) {
 document.getElementById("mewHp").innerHTML = mewHp - squirtAtk;
 mewHp = mewHp - squirtAtk;
 x++; squirtAtk = 25 * x;
 document.getElementById("squirtleHp").innerHTML = squirtHp - mewCounter;
 squirtHp = squirtHp - mewCounter;
}
else {
   console.log("the battle is not set, choose pokemon or reload page")
}
if (squirtHp <= 0) {
 $("#squirtle").appendTo("#selectionArea");
  document.getElementById("squirtle").innerHTML = null;
  squirtPlay = false;
  squirtDef = false;
  a = 1;
}
if (charHp <= 0) {
 $("#charmander").appendTo("#selectionArea");
  document.getElementById("charmander").innerHTML = null;
  charPlay = false;
  charDef = false;
  b = 1;
}
if (marioHp <= 0) {
 $("#mario").appendTo("#selectionArea");
  document.getElementById("mario").innerHTML = null;
  marioPlay = false;
  marioDef = false;
  c = 1;
}
if (bulbHp <= 0) {
 $("#bulbasaur").appendTo("#selectionArea");
  document.getElementById("bulbasaur").innerHTML = null;
  bulbPlay = false;
  bulbDef = false;
  d = 1;
}


if (a + b + c + d == 3) {
      
      $("#mewtwo").appendTo("#defenderArea");
      mewDef = true;
      if (mewHp <= 0) {
          alert("you beat mewtwo!")
          document.getElementById("mewtwo").innerHTML = null;
      }
  }
 if (a + b + c + d == 4) {
  alert("you lose!)
        }

});
