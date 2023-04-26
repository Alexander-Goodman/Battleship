function makePhases() {
    let words1 = ['Hello', 'Hi', 'Привет', 'Как дела?'];
    let words2 = ['Красотка', 'Ангел', 'Пчёла', 'Солнце'];
    let words3 = ['Ты одна?', 'пиво будешь?', 'Поехали ко мне?', 'Понял!'];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);

    let phrase = words1[rand1] + ', ' + words2[rand2] + '! ' + words3[rand3];
    alert(phrase);
}

makePhases();

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 67, 52, 34, 35, 48, 18, 55, 31, 23, 34, 44, 67];
let costs = [.25, .27, .25, .25, .31, .33, .25, .24, .26, .22, .30, .20, .23, .27, .25, .27, .23, .27, .23, .27,];

function printAndGetHighScore(scores) {
    let highScore = 0;
    let output;

    for (let i = 0; i < scores.length; i++) {
        output = `Bubble solution #${i} score: ${scores[i]}`;
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestRes(scores, highScore) {
    let bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }

    return bestSolutions;
}
let highScore = printAndGetHighScore(scores);
console.log(`Bubbles tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);

let bestSolutions = getBestRes(scores, highScore);
console.log(`Solutions with the highest score: ${bestSolutions}`);

function getMostCostEffectSolution(bestSolutions, costs) {
    let cost = 100;
    let index;

    for (let i = 0; i < bestSolutions.length; i++) {

        if (cost > costs[bestSolutions[i]]) {
            index = bestSolutions[i];
            cost = costs[bestSolutions[i]];
        }
    }
    return index;
}
let mostCostEffective = getMostCostEffectSolution(bestSolutions, costs);

console.log(`Bubble Solution # ${mostCostEffective}`);


// пароль заданной длины
/* function generatePassword(length) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const newArr = new Array(length).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    console.log(newArr);
}
generatePassword(5); */
