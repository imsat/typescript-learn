interface Bike {
    make: string,
    model?: string,
    numberOfMiles: number
}

let bike: Bike = {
    make: 'Tvs',
    model: 'RTR 4v',
    numberOfMiles: 25000
}

// type BikeModel = Bike['model']
//
// let bikeName: BikeModel = bike.model

type BikeName = Bike['model'] | Bike['make']

let bikeName: BikeName = bike.model || bike.make