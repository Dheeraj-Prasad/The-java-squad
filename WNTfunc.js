let guesses;
let max;

function easy_NUM(){
    alert("You have chosen easy mode...guess a number between 1-20 in 3 chances or less, GOOD LUCK!");
    guesses = 3;
    max = 20;
}

function med_NUM(){
    alert("You have chosen medium mode...guess a number between 1-50 in 6 chances or less, GOOD LUCK!");
    guesses = 6;
    max = 50;
}

function hard_NUM(){
    alert("You have chosen hard mode...guess a number between 1-100 in 10 chances or less, GOOD LUCK!");
    guesses = 10;
    max = 100;
}


function ran(){

    let x = Math.floor((Math.random()*max)+1);
    return x;
}