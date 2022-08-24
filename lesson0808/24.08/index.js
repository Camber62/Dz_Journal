class User {
    constructor(initName, initSername, initAge) {
        this.name = initName
        this.Sername = initSername
        this.Age = initAge
    };


    // методS
    getFullName() {
        return ` ${this.name} ${this.Sername}`
    }

    isAdult() {
        return this.Age >= 18;

//true && false
    }

    incAge(num) {
        return this.Age = this.Age + num
    }
}


//Создать из класса User один эекземпляр
// const user = new User('Alex', 'Zakhar', 30)


// console.log('FullName:', user.getFullName())
// console.log('isAdult:', user.isAdult())
// user.incAge(3)
// console.log('count:', user.Age)


class Student extends User {
    constructor(initName, initSername, initAge) {
        super(initName, initSername, initAge)// вызывает конструктор
        this.role = 'Student'
    }
    getFullName() {
        return ` ${this.name} ${this.Age}`
    }


    isAdult() {
        return this.Age>=16
    }


    checkAccess(){
        if(!this.isAdult()){
            return 'No'
        }return 'Ok'
    }
}


const student = new Student('Alex', 'Zakhar', 30)
console.log('checkAccess:', student.checkAccess())
// console.log(student)

// console.log('isAdult:', student.isAdult())
// console.log('isAdult:', student.getFullName())




// function Users(UserName,serName){
//     let User={
//         name:UserName,
//         serName:serName
//     }
//     return User
//
// }
//
// console.log( Users('Alex','Zakharkin'))