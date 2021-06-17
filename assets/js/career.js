let slide = document.querySelectorAll('.gallery-slide')
let exitBtn = document.querySelector('.exit')
let body = document.querySelector('body')
let jobs = document.querySelectorAll('.job_options_div')
let devJob = document.querySelectorAll('.dev_job')
let managerJob = document.querySelectorAll('.manager_job')
let designJob = document.querySelectorAll('.design_job')
// slide = [...slide]

const scrollBtn = document.querySelector('.scrollbtn')

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

slide.forEach((item,index) => {
    item.addEventListener('click', () => {
        body.classList.add('display')
        let mySwiper = new Swiper ('.mySwiper', {
            initialSlide: index,
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            loop: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            }
        });
        return mySwiper
    })
})


exitBtn.addEventListener('click', () => {
    body.classList.remove('display')
})






jobs.forEach((each) => {
    each.addEventListener('click', () => {
        document.querySelector('.job_options_div.active_job').classList.remove('active_job')
        each.classList.add('active_job')
        
        let allJobs = document.querySelectorAll('.job_div')
        
        if (document.querySelector('.all.active_job')) {
            allJobs.forEach((all) => {
                all.classList.add('nodisplay')
            }) 
            
            let nodisplay = document.querySelectorAll('.nodisplay')
            nodisplay.forEach((eachJob) => {
                eachJob.classList.remove('nodisplay')
            })
        } else if (document.querySelector('.designer.active_job')) {
            allJobs.forEach((all) => {
                all.classList.add('nodisplay')
            })
            designJob.forEach((des) => {
                des.classList.remove('nodisplay')
            })

        } else if (document.querySelector('.developer.active_job')) {
            allJobs.forEach((all) => {
                all.classList.add('nodisplay')
            })
            devJob.forEach((dev) => {
                dev.classList.remove('nodisplay')
            })

        } else if (document.querySelector('.management.active_job')) {
            allJobs.forEach((all) => {
                all.classList.add('nodisplay')
            })
            managerJob.forEach((mng) => {
                mng.classList.remove('nodisplay')
            })
        }
    })

})



