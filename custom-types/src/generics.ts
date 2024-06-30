class Queue<T> {
    private items: T[]

    constructor(startingValue: T) {
        this.items = [startingValue]
    }

    add(newItem: T) {
        this.items.push(newItem)
    }

    remove(): T | undefined {
        return this.items.shift()
    }
}

let stringQueue = new Queue('Hello')
stringQueue.add('hello')
console.log(`The first element in the queue is: ${stringQueue.remove()}`)

let numberQueue = new Queue(1)
numberQueue.add(4)
console.log(`The first element in the  queue is: ${numberQueue.remove()}`)

function print<T>(value: T): void {
    console.log(`The value is: ${value}`)
}

print('hello')