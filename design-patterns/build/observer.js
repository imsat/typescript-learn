"use strict";
class Subject {
    constructor() {
        this.observers = [];
        this.value = '';
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    setValue(newValue) {
        this.value = newValue;
        this.observers.forEach(observer => observer.update(newValue));
    }
}
class LogObserver {
    update(value) {
        console.log(`Updated! The new value is: ${value}`);
    }
}
let observer1 = new LogObserver();
let observer2 = new LogObserver();
let observer3 = new LogObserver();
let subject = new Subject();
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.setValue('Design Patterns!');
