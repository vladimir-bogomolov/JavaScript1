"use strict";
let strings = ['Hello World!', 'Привет мир!', 'Hallo Wereld!', 'Ciao Mondo!', 'Hej Världen!', 'Hola Món!', 'Hallo Verden!', 'Hola mundo!', 'Hello Dunia!', 'Hei, Maailma!'];
function logHello(string) {
    console.log(string);
}
for (let item of strings) {
    logHello(item);
}
