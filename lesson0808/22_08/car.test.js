const car  = require('./index')


beforeAll(()=>{

})


beforeEach(()=>{

})

afterEach(()=>{

})


afterAll(()=>{

})



// test('3+3=6',()=>{
//     console.log('test')
//     expect(3+3).toBe(6)
// })


beforeEach(()=>{
    car.init([
        {
            id:1,
            name:'Lada 2106',
            color:'red',
            year:2000,
            price:100,
            currency:'RUB',
        },
        {
            id:2,
            name:'Lada 21099',
            color:'green',
            year:1990,
            price:500,
            currency:'RUB',
        }
    ])
})

// describe('getCars',()=>{
//
//     test('Возвращает список машин(Массив)',()=>{
//         expect(car.getCars()).toEqual([
//         {
//             id: 1,
//                 name: 'Lada 2106',
//             color: 'red',
//             year: 2000,
//             price: 100,
//             currency: 'RUB'
//         },
//         {
//             id: 2,
//                 name: 'Lada 21099',
//             color: 'green',
//             year: 1990,
//             price: 500,
//             currency: 'RUB'
//         }]
//         )
//     })
// })



// describe('getCars',()=>{
//
//     test('id-one',()=>{
//         expect(car.getCar(1)).toEqual(
//             {
//                 id:1,
//                 name:'Lada 2106',
//                 color:'red',
//                 year:2000,
//                 price:100,
//                 currency:'RUB',
//             }
//         )
//     })
// })


describe('getCars',()=>{

    test('Должен вернуть undefined если нет нужного id',()=>{
        expect(car.getCar(12)).toEqual(
                undefined
        )
    })
})