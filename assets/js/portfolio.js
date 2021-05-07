let onScroll = document.querySelector('.blue')

const options = {
    root: null,
    threshold: 0.25,
    rootMargin: '-150px'
}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log('jora')
        entry.target.classList.toggle('scrolled')
    })
}, options)

observer.observe(onScroll)