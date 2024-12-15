var names=document.getElementById('name-error');
var phone=document.getElementById('phone-error');
var email=document.getElementById('email-error');
var message=document.getElementById('msg-error');
var submit=document.getElementById('submit-error');

function validateName(){
    let fullName=document.getElementById('fname').value;
    if(fullName.length===0){
        names.innerHTML="Name is required";
        return false;

    }
    if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        names.innerHTML="Write full name";
        return false;

    }
    names.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phoneNumber=document.getElementById('contact-number').value;

    if(phoneNumber.length == 0){
        phone.innerHTML="Phone no is required";
        return false;
    }
    if(phoneNumber.length !== 10){
        phone.innerHTML="Phone no should be 10 digits";
        return false;
    }
    if(!phoneNumber.match(/^[0-9]{10}$/)){
        phone.innerHTML="Only digits please";
        return false;
    }

    phone.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateEmail(){
     let emailId=document.getElementById('contact-email').value;

     if(emailId.length == 0){
        email.innerHTML="Email Required";
        return false;

     }
     if(!emailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.innerHTML="Email Invalid";
        return false;
    }
    email.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function validateMessage(){
    let msg=document.getElementById('contact-msg').value;
    let required=30;
    let left=required - msg.length;

    if(left > 0){
        message.innerHTML=left+' more characters required';
        return false;
    }
    message.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submit.style.display='block';
        submit.innerHTML="Please fix the error(s) to submit";
        setTimeout(function(){
            submit.style.display='none';

        },2000);
        return false;
    }
    return true;
}