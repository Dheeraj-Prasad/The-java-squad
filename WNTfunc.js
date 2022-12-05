let guesses= 0;
let max = 0;

function easy_NUM(){
  
    guesses = 3;
    max = 20;
    window.location.href = "playerpage.html";
    alert("You have chosen easy mode...guess a number between 1-20 in 3 chances or less, GOOD LUCK!");
}

function med_NUM(){
    
    guesses = 6;
    max = 50;
    window.location.href = "playerpage.html";
    alert("You have chosen medium mode...guess a number between 1-50 in 6 chances or less, GOOD LUCK!");
}

function hard_NUM(){
    
    guesses = 10;
    max = 100;
    window.location.href = "playerpage.html";
    alert("You have chosen hard mode...guess a number between 1-100 in 10 chances or less, GOOD LUCK!");
}


function ran(){

    let x = Math.floor((Math.random()*max)+1);
    return x;
}
function msgg(){

    let out = "";

    let x = Math.floor((Math.random()*3)+1);

    if(x == 1){

        out = "Great";
    }

    else if (x == 2){

        out = "Awesome";

    }

    else{

        out= "Excellent";
    }

    return out;


}

function msgb(){

    let out = "";

    let x = Math.floor((Math.random()*3)+1);

    if(x == 1){

        out = "Try Again";

    }

    else if (x == 2){

        out= "Wrong";

    }

    else{

        out = "Shaking my Head";
    }

    return out;


}


var count = 0;
var com = ran();

function sub(){

    var trac = document.getElementById("tracker");
    var gL = document.getElementById("GuessesL");
    var Score = document.getElementById("Score");

    gL.innerHTML = guesses;

    var user = parseInt(prompt("guess a number"));

    if(guesses > 0){

        if(user == com){

            guesses = 3;
            com = ran();
            count = count + 1;
            alert(msgg());
            trac.innerHTML = "";
        }
        else{

            guesses = guesses -1;
            trac.innerHTML = trac.innerHTML+ user + "<br>";
            alert(msgb());
        }
    }

    Score.innerHTML=count;

    gL.innerHTML = guesses;


}
