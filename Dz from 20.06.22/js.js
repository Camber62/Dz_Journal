let input = document.querySelector('input')
let button = document.querySelector('button')
let checkbox = document.querySelector('input[type="checkbox"]')
let select = document.querySelector('select')
let option = document.querySelectorAll('option')




const value1 = localStorage.getItem('key')
const value2 = localStorage.getItem('checkbox')
const value3 = localStorage.getItem('select')




if(value1){
    input.setAttribute('value', value1)
}

if(value2){
    checkbox.setAttribute('checked', value2)

}

if(value3){
    for(let i=0;i<option.length;i++){
        if(option[i].value===value3){
            option[i].setAttribute('selected', value3)
        }
        console.log(option[i])
    }
}



input.addEventListener('keyup',function (event){
    localStorage.setItem('key',input.value)
})



checkbox.addEventListener('click',function(event){
    localStorage.setItem('checkbox',checkbox.checked)
})



select.addEventListener('click',function(event){
    localStorage.setItem('select',select.value)
    console.log(select.value)
})



//кнопка сброса

button.addEventListener('click',function (){
    localStorage.removeItem('key')
    localStorage.removeItem('checkbox')
    localStorage.removeItem('select');
})