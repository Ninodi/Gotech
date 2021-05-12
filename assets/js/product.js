const scrollBtn = document.querySelector('.scrollbtn')

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


let onScroll = document.querySelector('.product_grid')

const options = {
    root: null,
    threshold: 0.25,
    rootMargin: '-200px'
}

let observer = new IntersectionObserver((entries, observer) => {
    // if (!entry.isIntersecting){
    //     return
    // }
    entries.forEach((entry) => {
        console.log('jora')
        entry.target.classList.toggle('onscroll')
        // observer.unobserve(entry.target)
    })
}, options)

observer.observe(onScroll)