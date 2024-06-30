"use strict";
class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    getIntroduction() {
        return `Hello my name is ${this.name}`;
    }
    getIntroductionTo(name) {
        return `Hello ${name}, my name is ${this.name}`;
    }
}
let human = new Human('Saikat', 'Male', 25);
console.log(human.getIntroduction());
console.log(human.getIntroductionTo('Satyajit'));
