let inputLimit = document.querySelector('input')
let inputPage = document.querySelector('input')
let button = document.querySelector('button')
let buttonPage = document.querySelector('.btn')
let buttonMore = document.querySelector('.more')



;(async () => {

    await getAllCAts();
})();

let cats = [];

async function getAllCAts(limit,page) {
    if(limit === ''){
        limit=15;
    }
    if(page === ''){
        page=1;
    }
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}$order=ASC`, {
        headers: {
            "x-api-key": "48ef3a50-cb8a-4f11-807d-e39a84e58f5948ef3a50-cb8a-4f11-807d-e39a84e58f59"
        }
    });
    cats = await res.json();
    console.log(cats)
    return cats
}



button.addEventListener('click',function (event){
    getAllCAts(inputLimit.value,inputPage.value)
})
let i = 0;
buttonPage.addEventListener('click',function (event){
    i++;
    getAllCAts(15 , i)

})


let newCats

buttonMore.addEventListener('click',function (){
    cats = cats.concat(newCats);
    console.log(cats)
})




// не пойму как реализовать еще 15