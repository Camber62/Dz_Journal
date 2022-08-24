// const {unitGenerId} = require("./index");
const car = {
    id: 1,
    name: 'Lada 2106',
    color: 'red',
    year: 2000,
    price: 100,
    currency: 'RUB',
}

let InitCars = [{
    id: 1,
    name: 'Lada 2106',
    color: 'red',
    year: 2000,
    price: 100,
    currency: 'RUB'
},
    {
        id: 2,
        name: 'Lada 21099',
        color: 'green',
        year: 1990,
        price: 500,
        currency: 'RUB'
    }]
//initCars массив предустановленных машин
// list список машин
//если initCars не установлен то по дефолду[]

class Cars {
    constructor(initCars = []) {
        this.list = initCars
    }

    getCars = () => {
        return this.list  //список машин
    }

    addCar = (newCar) => {
        newCar.id = this.unitGenerId()    //добавление машины
        this.list.push(newCar)
        return newCar.id
    }

    unitGenerId = () => {
        let max = 1
        for (let i = 0; i < this.list.length; i++) {     //добавление id
            if ((this.list)[i].id > max) {
                max = (this.list)[i].id
            }
        }
        return max + 1
    }
    getCar = (id) => {
        return this.list.find(item => item.id === id)  //поиск по id find ищет в массиве и возвращает элемент если условвие выполняется
    }


    replaceCar = (newCar) => {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === newCar.id) {
                this.list[i] = newCar
            }

        }
    }


    updateCar(id, newCar) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                this.list[i] = {
                    ...this.list[i],    //object.assign(this.list[i],newCar)
                    ...newCar
                }
            }
        }
    }


    deleteCar = (id) => {
        this.list = this.list.filter(item => item.id !== id)   //ставляем все элементы не равному id (удаление)
    }


    searchByName(name){
       return this.list.filter(item=>{
           const itemNameLower =item.name.toLowerCase()
           const NameLower = name.toLowerCase()
           return itemNameLower.includes(NameLower)
       })
    }

}








const cars = new Cars(InitCars)




cars.addCar({
    name: 'Lada ',
    color: 'red',
    year: 2000,
    price: 100,
    currency: 'RUB'
},)


cars.replaceCar({
    id: 2,
    name: 'Lada ',
    color: 'red',
    year: 2000,
    price: 7,
    currency: 'RUB'
})

cars.updateCar(1, {
    name: 'Aist'
})






// cars.deleteCar(1)


// cars.searchByName('Lada')

console.log(cars.searchByName('Lada'))


getCar = (id) => {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            return cars[i]
        } else {
        }
    }
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