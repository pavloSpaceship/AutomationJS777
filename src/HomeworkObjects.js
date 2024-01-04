let pet1 = {
    kind: "cat",
    name: "garfield",
    age: 4,
    hasVaccination: false

};
let pet2 = {
    kind: "dog",
    name: "Zack",
    age: 14,
    hasVaccination: false
}
let pet3 = {
    kind: "rat",
    name: "zoom",
    age: 0.5 ,
    hasVaccination: true
}
console.log(pet2.kind);

let houseOwner1 = new Object();
let houseOwner2 = new Object();
let houseOwner3 = new Object();

houseOwner1.name = "Pavlo";
houseOwner1.age = 25;
houseOwner1.isSingle = true;

houseOwner2.name = "Bogdan";
houseOwner2.age = 45;
houseOwner2.isSingle = true;

houseOwner3.name = "Kolia";
houseOwner3.age = 28;
houseOwner3.isSingle = false;

console.log(houseOwner1);
console.log(houseOwner2);
console.log(houseOwner3);



let human = {
    earnMoney: true
};

let man = {
    hasBeard: true
}

man.__proto__ = human;

console.log(man.hasBeard);
console.log(man.earnMoney);

let engineer = {
    name: "Pavlo",
    experience: 1.5
};

let QA_engineer = Object.create(engineer);

QA_engineer.hasISTQB = true;
QA_engineer.rank = "Middle";

console.log(QA_engineer.experience);
console.log(QA_engineer.name);
console.log(QA_engineer);

let person = {
    sex: "Male"
}

QA_engineer.__proto__ = person;

console.log(QA_engineer.sex);
