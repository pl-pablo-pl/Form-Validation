const createAccountForm=document.getElementById('createAccountForm')
const fullname=document.getElementById('fullname')
const Email=document.getElementById('Email')
const Password=document.getElementById('Password')
const confirmPassword=document.getElementById('confirmPassword')


createAccountForm.addEventListener('submit',e=>{
    e.preventDefault()
    ValidationForm()
})

function ValidationForm(){
    if(CheckFullName() && CheckEmail() && CheckPassword() && CheckPasswordConfirm() ){
    
        alert(
                `full name:${fullname.value}
                eamil: ${Email.value}`
        )
    }
   

    }
   
function CheckFullName(){
    const fullnameValue=fullname.value.trim();
    if(fullnameValue===''){
        setSuccesErorMessage(fullname, 'please enter your fullname')
        return false
    }else{
        let regex=/^[a-zA-Z\s]+$/;
        if(!regex.test(fullnameValue)){
            setSuccesErorMessage(fullname, 'please enter valid name')
            return false
        }
        setSuccesErorMessage(fullname, '')
        return true
    }
}

function CheckEmail(){
    const emailValue=Email.value.trim();
    if(emailValue===''){
        setSuccesErorMessage(Email, 'please enter your email')
        return false
    }else{
        let regex=/^\S+@gmail+\.com+$/;
        if(!regex.test(emailValue)){
            setSuccesErorMessage(Email, 'please enter valid email')
            return false
        }
        setSuccesErorMessage(Email, '')
        return true
    }
}
function CheckPassword(){
    const passwordValue=Password.value.trim();
    if(passwordValue===''){
        setSuccesErorMessage(Password, 'please enter password')
        return false
    }else{
        if(passwordValue.length < 8){
            setSuccesErorMessage(Password, 'your password must 8 carchter')
            return false    
        }
        setSuccesErorMessage(Password, '')
        return true
    }
    
}
function CheckPasswordConfirm(){
    const confirmPasswordValue=confirmPassword.value.trim();
    if(confirmPasswordValue===''){
        setSuccesErorMessage(confirmPassword, 'please enter your confirm password')
        return false
    }else{
        if(Password.value !== confirmPassword.value){
            setSuccesErorMessage(confirmPassword, 'password and confirm not match')
            return false
        }
        setSuccesErorMessage(confirmPassword, '')
        return true
    }
    
}

const setSuccesErorMessage=(input,message)=>{
    const formControl=input.parentElement;
    console.log(formControl);
    if(message ===""){
        formControl.querySelector('small').innerText=''
        formControl.className='form-control success'

    }else{
        formControl.querySelector('small').innerText=message
        formControl.className='form-control error'
        input.setAttribute('class','eror')
    }
    setTimeout(() => {
        input.setAttribute('class','')
    }, 1000);
}


