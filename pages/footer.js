const email = document.getElementById('email')
const form = document.getElementById('input-form')
const border = document.getElementById('border-input')
const submit = document.getElementById('submit')
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

window.addEventListener('DOMContentLoaded', e => {
    const form = document.getElementById('email-form')
    const submit = document.getElementById('send-email')
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const result = validateEmail()
            console.dir(result)
            if (result) {
                border.style.background = 'rgba(75, 146, 0, 1)'
                submit.style.color = 'rgba(75, 146, 0, 1)'
            } else {
                border.style.background = 'rgba(211, 20, 20, 1)' 
                submit.style.color = 'rgba(211, 20, 20, 1)' 
            }
        });
    }     
})

function validateEmail() {
    if (email.value.match(pattern)) {
        return true
    } else {
        return false
    }
}