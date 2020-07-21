'use strict';
const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];
for (let i=0; i<5; i++) {
    if (i%2 === 0) {
        drinkTray.push(drinkTypes[0]);
    } else {
        drinkTray.push(drinkTypes.shift());
    }
}
console.log('Hey guys, I brought a ' + drinkTray.join(', ') + '!');