let text = document.querySelector('.textarea')
let username = document.querySelector('.name')
let email = document.querySelector('.email')
let postBtn = document.querySelector('.button')
let commentSec = document.querySelector('.comment_sec')
let changeTitle = document.querySelector('.comment_sec_title')

// let userInfo = JSON.parse(localStorage.getItem('Users'))

// let user = () => {
//     userInfo.push({
//         username: username.value,
//         email: email.value
        
//     })
    
//     localStorage.setItem('Users', JSON.stringify(userInfo))
    
//     return {
//         username,
//         email
//     }
// }


postBtn.addEventListener('click', () => {
    let innerText = `
    <div class="user_img">
    <img src="assets/img/user.png" alt="">
    </div>
    <div class="comment_text">
    <h5 class="user">${username.value}</h5>
    <p>${text.value}</p>
    <div class="reply">
    <p class="reply_btn">Reply</p>
    <span>${new Date(Date.now()).toLocaleDateString()}</span>
    </div>
    </div>
    `
    let comment = document.createElement('div')
    comment.classList.add('comment')
    if(text.value === '') {
        return
    } else {
        comment.innerHTML = innerText
        commentSec.appendChild(comment)    
    }
    
    // user()
    
    username.value = ''
    text.value = ''
    email.value = ''
    
    let replyBtn = document.querySelectorAll('.reply_btn')
    let usernameValue = document.querySelectorAll('.user')

    replyBtn.forEach((reply) => {
        reply.addEventListener('click', () => {
            console.log('jora')
            if(changeTitle.innerText === 'Leave a comment') {
                usernameValue.forEach((userValue) => {
                    changeTitle.innerText = 'Reply to' + ' ' + userValue.innerText
                })
            } else {
                changeTitle.innerText = 'Leave a comment'
            }
        })
    })
})

