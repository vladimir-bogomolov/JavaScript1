'use strict';
const cartForParty = {
    'champagne': 30,
    'oysters': 40,
    'juice': 3.76,
    'cake': 7.80,
    'chocolate': 5.61,
};
function calculateTotalPrice(cart) {
    let price = 0;
    for (let item in cart) price = price + parseFloat(cart[item]);
    return 'Total: \u20AC' + price;
}
console.log(calculateTotalPrice(cartForParty));