'use strict';
let books = [
    {'title': 'The Hobbit',
    'author': 'J.R.R. Tolkien',
    'alreadyRead': false},
    {'title': 'War and peace',
    'author': 'L.N. Tolstoy',
    'alreadyRead': true},
    {'title': 'Dandelion Wine',
    'author': 'Ray Bradbury',
    'alreadyRead': true},
];
for (let book of books) {
    console.log(book['title'] + ' by ' + book['author']);
    if (book['alreadyRead'] === true) {
        console.log('You already read "' + book['title'] + '"');
    }
    else {
        console.log('You still need to read "' + book['title'] + '"');
    }
}
