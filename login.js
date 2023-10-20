const form = document.querySelector('#login-form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')


let usernameVal = localStorage.getItem('Email')
let usernameArr = usernameVal ? JSON.parse(usernameVal) : [];

let passwordVal = localStorage.getItem('Password')
let passwordArr = passwordVal ? JSON.parse(passwordVal) : [];

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(validateInput()) {
        window.location.href='todo.html'
    }
})

function validateInput(){
    let usernameVal = username.value.trim()
    let passwordVal = password.value.trim()
    let success = true
    console.log(usernameArr.includes(usernameVal))
    console.log(passwordArr.includes(passwordVal))

    if(usernameVal === '') {
         setError(username, '* username required to access')
         success = false
    } else if(usernameArr.includes(usernameVal)) {
        setSuccess(username)
    } else {
        setError(username, '* Invalid username')
        success = false
    }

    if(passwordVal === '') {
        setError(password, '* enter the password')
        success = false
    } else if(passwordArr.includes(passwordVal)) {
        setSuccess(password)
    } else {
        setError(password, '* Invalid Password')
        success = false
    }

    return success
}


function setError(element, message) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerHTML = message
    inputGroup.classList.add('error')
    inputGroup.classList.add('.success')
}

function  setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerHTML = ''
    inputGroup.classList.add('success')
    inputGroup.classList.add('.error')
}













//----------------- Form validation

// const form = document.querySelector('#form')
// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const cpassword = document.querySelector('#cpassword')


// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if(validateInputs()) {
//         window.location.href="todo.html"
//     }
// })

// function validateInputs() {
    
//     const usernameVal = username.value.trim()
//     const emailVal = email.value.trim()
//     const passwordVal = password.value.trim()
//     const cpasswordVal = cpassword.value.trim()
//     let success = true

  
//     if(usernameVal ===''){
//         success = false
//         setError(username, 'Username is requried')
//         console.log('user')
//     } else {
//         setSuccess(username)
//     }
  
//     if(emailVal === '') {
//         success = false
//         setError(email, 'Email is required')
//     } else if(!validateEmail(emailVal)) {
//         setError(email, 'Please enter a valid email')
//     } else {
//         setSuccess(email)
//     }

//     if(passwordVal === '') {
//         success = false
//         setError(password, 'Password is required')
//     } else if(passwordVal.length<8){
//         setError(password, 'Password must be atleast 8 character long')
//     } else {
//         setSuccess(password)
//     }

//     if(cpasswordVal === ''){
//         success = false
//         setError(cpassword, 'Confirm password is required')
//     } else if(cpasswordVal !== passwordVal){
//         setError(cpassword, 'Password does not match')
//     } else {
//         setSuccess(cpassword)
//     }
//     return success
//   }



// function setError(element, message){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }

// function setSuccess(element){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }

// const validateEmail = (email) => {
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     )
// }

// // ----------------- Todo list
