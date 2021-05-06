const scrollBtn = document.querySelector('.scrollbtn')

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})



let person = [10, 5, 'mobile', [20, 'car']]


for(var i = 0; i < person.length; i++){
    if(typeof(person[i]) === 'object') {
        let my = new Array(person[i])
        // my.toString()
        array.from(Array)
        for(k = 0; k < my.length; k++){
            console.log(my[k])
        }
    } else
    console.log(person[i])
}