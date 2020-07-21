'use strict';
let recipe = {};
recipe.title = 'Sandwich';
recipe.servings = 1;
recipe.ingredients = ['2 ps. bread', '1 p. salmon', '1 avocado'];
for (let item in recipe) {
    console.log(item + ': ' + recipe[item]);
}