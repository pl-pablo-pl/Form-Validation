const passwordBox=document.getElementById('password')
const copy=document.querySelector('.copy')
const button=document.querySelector('.generate')
const back=document.querySelector('.back')

let length=8

const upperCase='ABCDEFJHIKLMNOPQRSTYWXYZ'
const lowerCase='abcdefjhiklmnopqrstywxyz'
const  number='0123456789'
const symbol='!@#$%^&*()_+<??/|;:'
const allChar=upperCase + lowerCase+ number + symbol

button.addEventListener('click',function(){
    let password=''
    password+=upperCase[Math.floor(Math.random()* upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password+=number[Math.floor(Math.random()* number.length)]
    password+=symbol[Math.floor(Math.random()* symbol.length)]

    while(length > password.length){
        password+=allChar[Math.floor(Math.random()* allChar.length)]

    }
    passwordBox.value=password

})

copy.addEventListener('click',function(){
    passwordBox.select()  // select the text field
    navigator.clipboard.writeText(passwordBox.value)

    alert('copied the password :  '+ passwordBox.value)
})

back.addEventListener('click',function(){
    window.history.back()
})