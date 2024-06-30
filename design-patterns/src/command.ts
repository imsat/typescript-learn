interface Command {
    execute(): void
    undo(): void
}

class Counter {
    private value: number = 0

    setValue(newValue: number) {
        this.value = newValue
    }

    getValue():number {
        return this.value
    }
}

class IncrementCommand implements Command {
    private counter: Counter
    constructor(counter: Counter) {
        this.counter = counter
    }
    execute() {
        this.counter.setValue(this.counter.getValue() +  1)
    }
    undo() {
        this.counter.setValue(this.counter.getValue() -  1)
    }
}

let counter = new Counter()

let incCommand = new IncrementCommand(counter)
incCommand.execute()

console.log(`The current value of counter id: ${counter.getValue()}`)
incCommand.execute()
incCommand.execute()
incCommand.execute()
console.log(`The current value of counter id: ${counter.getValue()}`)
incCommand.undo()
console.log(`The current value of counter id: ${counter.getValue()}`)