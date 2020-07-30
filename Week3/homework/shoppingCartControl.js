'use strict';
let shoppingCart = ['bananas', 'milk'];
function addToShoppingCart(item) {
    if (shoppingCart.push(item) > 3) shoppingCart = shoppingCart.slice(1);
    let list = 'You bought ';
    for (let elem of shoppingCart) list = list + elem + ', ';
    list = list.slice(0, list.length-2) + '!';
    return list;
}
console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart('tea'));