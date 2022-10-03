


const GeneratorId = (elem) => {
    let max = 1
    for (let i = 0; i < elem.length; i++) {     //добавление id
        if ((elem)[i].id > max) {
            max = (elem)[i].id
        }
    }
    return max + 1
}
export default GeneratorId