let numbers = [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9]

for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 5;
}
console.log(numbers);



let numbersSet = new Set(numbers);
let sum = 0;

for (let number of numbersSet) {
    number += 2;
    sum += number;
}
console.log(sum);



let lettersMap = new Map();
let letters = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let value = numbersSet.has(numbers[i]) ? numbers[i] : null;
    lettersMap.set(letter, value);
}



let concatenatedKeys = '';

for (let key of lettersMap.keys()) {
    concatenatedKeys += key;
}

console.log(concatenatedKeys);
