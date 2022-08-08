const arr = 'arrivaaa';



function array (event){
    let count = {}

    for(let i = 0 ; i < event.length; i++){
        const letter = arr[i]

        if(count[letter]===undefined){
            count[letter]=0
        }
        count[letter]++
    }
    console.log(count)
}
array(arr)