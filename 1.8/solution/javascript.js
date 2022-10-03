const random = Math.floor(Math.random() * 100);
let choice = prompt("Guess the number");
let noguess = 0;

while(choice != random) {
    if(choice > random) {
        choice = prompt("Guess the number:\nthe number is lower");
    } else {
        choice = prompt("Guess the number:\nthe number is higher");
    }
    noguess++;
}

alert("Gratulation! Die Zahl ist: " + random + "!\nDu hast ganze " + noguess + " Versuche gebraucht!");