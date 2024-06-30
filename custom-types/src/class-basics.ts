interface NamedObject {
    name: string
    getName(): string
}

let dog: NamedObject = {
    name: 'Ommerce',
    getName() {
        return this.name
    }
}

class Human {
    private name: string
    private gender: string
    private age: number

    constructor(name: string, gender: string, age: number) {
        this.name = name
        this.gender = gender
        this.age = age
    }

    public getIntroduction(): string {
        return `Hello my name is ${this.name}`
    }

    public getIntroductionTo(name: string): string {
        return `Hello ${name}, my name is ${this.name}`
    }
}

let human = new Human('Saikat', 'Male', 25)

console.log(human.getIntroduction())
console.log(human.getIntroductionTo('Satyajit'))

