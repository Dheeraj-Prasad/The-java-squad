let guesses = 10;
let max = 100;


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