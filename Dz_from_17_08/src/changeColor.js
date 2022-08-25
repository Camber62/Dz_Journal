let str = 'red apple'


function changeColor(str, oldColor, newColor,withCase) {


    if(withCase===true) {}

        else if(typeof str !== "string") {

            return ''
        }
        else {}




    let newString = str.split(' ');

    for (let i = 0; i < newString.length; i++) {
        if (newString[i] === oldColor) {
            newString[i] = newColor

        }
    }


    return newString.join(' ')

}

// console.log(changeColor(message,'red','green'))


module.exports = changeColor;
