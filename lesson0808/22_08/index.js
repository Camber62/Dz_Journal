const car = {
    id: 1,
    name: 'Lada 2106',
    color: 'red',
    year: 2000,
    price: 100,
    currency: 'RUB',
}

let cars = []


getCars = () => {
    return cars
}

getCar = (id) => {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            return cars[i]
        } else {
        }
    }
}


addCar = (newCar) => {
    newCar.id=unitGenerId()
    cars.push(newCar)
    return newCar.id
}


unitGenerId=()=>{
    let max=1
    for(let i=0;i<cars.length;i++){
        if(cars[i].id>max){
            max=cars[i].id
        }
    }
    return max+1
}

deleteCar = (id) => {

}

upDateCar = () => {

}


resetCars = () => {
    cars.length = 0
}


init = (initCars) => {
    cars = initCars
}


module.exports = {
    getCars,
    getCar,
    addCar,
    deleteCar,
    upDateCar,
    resetCars,
    car,
    init,
    unitGenerId,

}