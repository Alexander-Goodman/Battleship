let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess; // выстрел по клетке
let hits = 0;
let guesses = 0; // количесво попыток

let isSunk = false;

while (isSunk == false) {
    guess = prompt('Ready?Fire! (enter a number 0-6): )');

    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses += 1;
        if(guess == location1 || guess == location2 || guess == location3){
            alert('HIT!');
            hits += 1;
            if(hits == 3){
                isSunk = true;
                alert('You sank my battleship!');
            }
        }else{
            alert('MISS');
        }
    }
}

const stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 
'which means your shooting accuaracy was ' + (3/guesses);

alert(stats);
