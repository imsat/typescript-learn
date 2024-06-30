"use strict";
class Counter {
    constructor() {
        this.value = 0;
    }
    setValue(newValue) {
        this.value = newValue;
    }
    getValue() {
        return this.value;
    }
}
class IncrementCommand {
    constructor(counter) {
        this.counter = counter;
    }
    execute() {
        this.counter.setValue(this.counter.getValue() + 1);
    }
    undo() {
        this.counter.setValue(this.counter.getValue() - 1);
    }
}
let counter = new Counter();
let incCommand = new IncrementCommand(counter);
incCommand.execute();
console.log(`The current value of counter id: ${counter.getValue()}`);
incCommand.execute();
incCommand.execute();
incCommand.execute();
console.log(`The current value of counter id: ${counter.getValue()}`);
incCommand.undo();
console.log(`The current value of counter id: ${counter.getValue()}`);
