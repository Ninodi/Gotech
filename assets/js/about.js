const scrollBtn = document.querySelector('.scrollbtn')

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})




// let container = document.querySelector('.gallery_container')

// let item = document.querySelectorAll('.gallery_item')

// // let item = [...item]

// item.forEach((each) => {
//     each.addEventListener('mouseover', () => {
//         container.classList.toggle('blurred')
//     })
// })