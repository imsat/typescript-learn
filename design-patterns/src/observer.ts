interface Observer<T> {
    update(value: T): void
}

class Subject {
    private observers: Observer<string>[] = []
    private value: string = ''

    public addObserver(observer: Observer<string>) {
        this.observers.push(observer)
    }

    public setValue(newValue: string) {
        this.value = newValue
        this.observers.forEach(observer => observer.update(newValue))
    }
}

class LogObserver implements Observer<string> {
    update(value: string): void {
        console.log(`Updated! The new value is: ${value}`)
    }
}

let observer1 = new LogObserver();
let observer2 = new LogObserver();
let observer3 = new LogObserver();

let subject = new Subject();
subject.addObserver(observer1)
subject.addObserver(observer2)
subject.addObserver(observer3)

subject.setValue('Design Patterns!')