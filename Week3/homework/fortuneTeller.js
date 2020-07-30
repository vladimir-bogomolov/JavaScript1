'use strict';
const numChildren = ['0', '1', '2', '3', '4'];
const partnerNames = ['Jenifer Lopez', 'SpongeBob', 'Lisa Simpson', 'Dart Weider', 'Predator'];
const locations = ['The Netherlands', 'France', 'Italy', 'Australia', 'Qatar'];
const jobs = ['programmer', 'very bad programmer', 'teacher', 'engineer', 'entrepreneur'];
function tellFortune(childrenNum, partner, location, job) {
    return `You will be a ${job} in ${location}, married to ${partner} with ${childrenNum} kids.`;
}
function randomSelect(array) {
    return array[Math.floor(Math.random() * array.length)];
}

for (let i = 0; i < 3; i++) {
    console.log(tellFortune(parseInt(randomSelect(numChildren)), randomSelect(partnerNames), randomSelect(locations), randomSelect(jobs)));
}

