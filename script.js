const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('#cookie')
const button = document.querySelector('#btnReset')

cookie.addEventListener('click', toggleHide)
button.addEventListener('click', buttonReset)

function toggleHide () {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function buttonReset (event) {
    event.preventDefault()
    toggleHide()
}