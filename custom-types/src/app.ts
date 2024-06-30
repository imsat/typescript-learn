type Person = {name: string, gender?: string, age?: number}

type Age = number | undefined

let person: Person  = {
    name: 'Saikat',
    gender: 'Male',
    age: 25
}

let person2: Person ={
    name: 'Satyajit'
}

let saikatAge: Age = person.age