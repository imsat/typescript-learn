let person3 ={
    name: 'Saikat',
    gender: 'Male',
    age: 25
}

type Person3 = typeof person3

let x = 5

type TypeOfX = typeof  x

type Person3Key = keyof Person3

function getPropertyFromPerson3(person: Person3, key: Person3) {
    return person[key]
}