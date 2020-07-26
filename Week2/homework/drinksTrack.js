'use strict';
const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];
let currentDrinkIndex = 0;
let currentDrink;
drinkTray.push(drinkTypes[0]); 
while (drinkTray.length < 5) {
    currentDrink = drinkTypes[currentDrinkIndex];
    if (drinkTray[drinkTray.length - 1] === currentDrink) {
        drinkTray.push(currentDrink);
        currentDrinkIndex++;
    } else {
        drinkTray.push(currentDrink);
    }
}

// for (let i=0; i<5; i++) {
//     if (i%2 === 0) {
//         drinkTray.push(drinkTypes[0]);
//     } else {
//         drinkTray.push(drinkTypes.shift());
//     }
// }
console.log('Hey guys, I brought a ' + drinkTray.join(', ') + '!');