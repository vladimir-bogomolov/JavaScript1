function giveCompliment(name) {
    let compliments = ['great', 'awesome', 'handsome', 'smart', 'perfect', 'amazing', 'superstar', 'hero', 'superhero', 'the best'];
    return 'You are ' + compliments[Math.floor(Math.random() * compliments.length)] + ', ' + name + '!';
}
console.log(giveCompliment('Vladimir'));
console.log(giveCompliment('Vladimir'));
console.log(giveCompliment('Vladimir'));
