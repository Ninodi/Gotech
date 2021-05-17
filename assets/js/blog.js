let applyBtn = document.querySelector('.applybtn')
let body = document.querySelector('body')
let exitBtn =document.querySelector('.exit')

const scrollBtn = document.querySelector('.scrollbtn')

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


applyBtn.addEventListener('click', () => {
    body.classList.add('popup')
})

exitBtn.addEventListener('click', () => {
    body.classList.remove('popup')
})