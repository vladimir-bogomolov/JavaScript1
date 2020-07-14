// Declare all variables
let item1 = 'String1';
let item2 = 'String2';
let item3 = {
    key: 'value',
}
let item4 = {
    key: 'Other value',
}

// Check data type
console.log('Item1: ' + (typeof item1));
console.log('Item2: ' + (typeof item2));
console.log('Item3: ' + (typeof item3));
console.log('Item4: ' + (typeof item4));

// Check if data type is the same
console.log('Item1 & item2:')
if (typeof item1 === typeof item2) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
console.log('Item1 & item3:')
if (typeof item1 === typeof item3) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
console.log('Item1 & item4:')
if (typeof item1 === typeof item4) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
console.log('Item2 & item3:')
if (typeof item2 === typeof item3) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
console.log('Item2 & item4:')
if (typeof item2 === typeof item4) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
console.log('Item3 & item4:')
if (typeof item3 === typeof item4) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
