let slide = document.querySelectorAll('.gallery-slide')
let exitBtn = document.querySelector('.exit')
let body = document.querySelector('body')
let jobs = document.querySelectorAll('.job_options_div')
let devJob = document.querySelectorAll('.dev_job')
let managerJob = document.querySelectorAll('.manager_job')
let designJob = document.querySelectorAll('.design_job')


const scrollBtn = document.querySelector('.scrollbtn')

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})



exitBtn.addEventListener('click', () => {
    body.classList.remove('display')
})


slide.forEach((each => {
    each.addEventListener('click', () => {
        body.classList.add('display')
    })
}))

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




// allJobs.addEventListener('click', () => {
//     let nodisplay = document.querySelectorAll('.nodisplay')
//     nodisplay.forEach((eachJob) => {
//         eachJob.classList.remove('nodisplay')
//     })
// })

// designer.addEventListener('click', () => {
//     let nodisplay = document.querySelectorAll('.nodisplay')
//     nodisplay.forEach((eachJob) => {
//         eachJob.classList.remove('nodisplay')
//     })

//     devJob.forEach((dev) => {
//         dev.classList.add('nodisplay')
//     })
//     managerJob.forEach((mng) => {
//         mng.classList.add('nodisplay')
//     })
// })

// developer.addEventListener('click', () => {
//     let nodisplay = document.querySelectorAll('.nodisplay')
//     nodisplay.forEach((eachJob) => {
//         eachJob.classList.remove('nodisplay')
//     })

//     designJob.forEach((des) => {
//         des.classList.add('nodisplay')
//     })
//     managerJob.forEach((mng) => {
//         mng.classList.add('nodisplay')
//     })
// // })

// management.addEventListener('click', () => {
//     let nodisplay = document.querySelectorAll('.nodisplay')
//     nodisplay.forEach((eachJob) => {
//         eachJob.classList.remove('nodisplay')
//     })

//     designJob.forEach((des) => {
//         des.classList.add('nodisplay')
//     })
//     devJob.forEach((dev) => {
//         dev.classList.add('nodisplay')
//     })
// })