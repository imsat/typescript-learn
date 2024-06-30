type User = {
    id: string
    name: string,
    email: string,
    age: number
}

type NewUserData = Pick<User, 'name' | 'email' | 'age'>
type ConstantUser = Readonly<User>
type PartialUser = Partial<User>
let partialUser = {
    name: 'Rupom'
}

let user: ConstantUser = {
    id: '123',
    name: 'Satyajit',
    email: 'sat@mail.com',
    age: 29,
}

// user.id = '322' //not work

let newUserData: NewUserData = {
    name: 'Saikat',
    email: 'sai@mail.com',
    age: 25,
}

let newUser = {
    ...newUserData,
    id: 'abc123'
}