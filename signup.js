const form = document.querySelector('#form')
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email') 
const gender = document.querySelector('#gender')
const phone = document.querySelector('#phone-number')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')
let emailArr = []
let passwordArr = []


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(validateInputs()){

        window.location.href='index.html'
    }
})

function validateInputs() {
    const firstnameVal = firstname.value.trim()
    const lastnameVal = lastname.value.trim()
    const emailVal = email.value.trim()
    const phoneVal = Number(phone.value.trim())
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    const genderVal = gender.options[gender.selectedIndex].value
    let success = true
    
    if(firstnameVal === '') {
        setError(firstname, "* First name is requried")
        success = false
    } else {
        setSuccess(firstname)
    }

    if(lastnameVal === '') {
        setError(lastname, '* Last name is requried')
        success = false
    } else {
        setSuccess(lastname)
    }
     
    if(emailVal === '') {
        setError(email, '* Email is required')
        success = false
    } else if(!validEmail(emailVal)) {
        setError(email, '* Email is not valid')
        success = false
    } else {
        setSuccess(email)
        
    }

    if(genderVal === ''){
        setError(gender, '* Gender is not select')
        success = false
    } else {
        setSuccess(gender)
        
    }
    
    let numberString = phoneVal.toString()
    if(phoneVal === 0){
        setError(phone, '* Phone number is required')
        success = false
    } else if(numberString.length === 10){
        setSuccess(phone)
    } else {
        setError(phone, '* Invalid phone number')
        success = false
    }

    if(passwordVal === ''){
        setError(password, '* Please create the password')
        success = false
    } else if(passwordVal.length<8) {
        setError(password, '* Password required atleast 8 digit')
        success = false
    } else {
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        setError(cpassword, '* re-confirm the password')
        success = false
    } else if(cpasswordVal === passwordVal) {
        setSuccess(cpassword)
        
    } else {
        setError(cpassword, 'Password is not matching')
        success = false
    }
    
    if(success){
        setData(emailVal, cpasswordVal)
    } else {
        return success
    }
    
    return success
}

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerHTML = message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}


function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerHTML = ''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
}

function setData(email, password){

    let existingEmailData = localStorage.getItem('Email')
    let emailVal = existingEmailData ? JSON.parse(existingEmailData) : []
    emailVal.push(email)
    localStorage.setItem('Email', JSON.stringify(emailVal))

    let existingPasswordData = localStorage.getItem('Password')
    let passwordVal = existingPasswordData ? JSON.parse(existingPasswordData) : []
    passwordVal.push(password)
    localStorage.setItem('Password', JSON.stringify(passwordVal))

}