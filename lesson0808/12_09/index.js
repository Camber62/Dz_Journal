const names = [
    {name: 'Alex'},
    {name: 'Nik'},
    {name: 'Ket'},
]


const list = document.querySelector('.container')

function render(names) {
    list.innerHTML +='';

    for(let i=0;i<names.length;i++){
        list.innerHTML += `<li>${names[i].name}</li>`


    }
}

render(names);



