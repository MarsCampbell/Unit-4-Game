

   
  // on click pokemon are moved to defenderArea and playerArea
 

$(document).ready(function() {
    $('#squirtle').click(function() {  
        $("#squirtle").appendTo("#defenderArea");
    });
});

$(document).ready(function() {
    $('#charmander').click(function() {  
        $("#charmander").appendTo("#defenderArea");
    });
});

$(document).ready(function() {
    $('#bulbasaur').click(function() {  
        $("#bulbasaur").appendTo("#playerArea");
    });
});

$(document).ready(function() {
    $('#mario').click(function() {  
        $("#mario").appendTo("#playerArea");
    });
});

// Pokemon health and attack stats

    
    var squirtHp = 200;
    var charHp = 120;
    var bulbHp = 190;
    var marioHp = 300;

    
    var squirtAtk = 10;
    var charAtk = 30;
    var bulbAtk = 15;
    var marioAtk = 20;
    
    squirtCounter = 8;
    charCounter = 12;

// writing pokemon health to inner html
    
    document.getElementById("squirtleHp" ).innerHTML = squirtHp;
    document.getElementById("charmanderHp").innerHTML = charHp;
    document.getElementById("bulbasaurHp").innerHTML = squirtHp;
    document.getElementById("marioHp").innerHTML = marioHp;


// the attack button function
    
    i = 1;

    $("#attackBtn").click(function(){
        document.getElementById("squirtleHp").innerHTML = squirtHp - marioAtk;
        i++;
        squirtHp = squirtHp - marioAtk * i; 
        document.getElementById("marioHp").innerHTML = marioHp - squirtCounter;
        marioHp = marioHp - squirtCounter;

        // if else statement to test if opponents hp has gone below zero
        if (squirtHp < 0 ) {
        alert("Squirtle is KO'd!")
        document.getElementById("squirtle").innerHTML = null;
    } else {
        console.log("Mario your not a pokemon!")
    }
        
});

    x = 1;

     $("#attackBtn2").click(function(){
        document.getElementById("charmanderHp").innerHTML = charHp - bulbAtk;
        x++;
        charHp = charHp - bulbAtk * x; 
        document.getElementById("bulbasaurHp").innerHTML = bulbHp - charCounter;
        bulbHp = bulbHp - charCounter;

        // if else statement to test if opponents hp has gone below zero
    if (charHp < 0 ) {
        alert("Charmander is KO'd!")
        document.getElementById("charmander").innerHTML = null;
    } else {
        console.log("bulbasaur use whiplash!")
    }

        
});



    
