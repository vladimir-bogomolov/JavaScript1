const array4 = ["hello", 123, true, { name: "Noer" }];
const array7 = [true, 123, "123", {}, [1, 2, 3], 6, "7"];
console.log('The length of the array4 is...' + array4.length);
console.log('The length of the array7 is...' + array7.length);
if (array4.length === array7.length) {
    console.log('They are the same!');
} else {
    console.log('Two different sizes');
}