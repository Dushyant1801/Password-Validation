let pswrd = document.querySelector("#pswrd");
let togglebtn = document.querySelector("#togglebtn");
 
let lowercase = document.querySelector('#lower')
let uppercase = document.querySelector('#upper')
let digit = document.querySelector('#number')
let specialchar = document.querySelector('#special')
let minlength = document.querySelector('#length')

function checkpassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    //lowercase validation check
    if(lower.test(data)){
        lowercase.classList.add('valid')
    }else{
        lowercase.classList.remove('valid')
    }
    //uppercase validation check
    if(upper.test(data)){
        uppercase.classList.add('valid')
    }else{
        uppercase.classList.remove('valid')
    }
    //number validation check
    if(number.test(data)){
        digit.classList.add('valid')
    }else{
        digit.classList.remove('valid')
    }
    //special character validation check
    if(special.test(data)){
        specialchar.classList.add('valid')
    }else{
        specialchar.classList.remove('valid')
    }
    //minimum 8 case validation check
    if(length.test(data)){
        minlength.classList.add('valid')
    }else{
        minlength.classList.remove('valid')
    }





}


//show & hide 

 togglebtn.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type' , 'text');
        togglebtn.classList.add('hide');
    }else{
        pswrd.setAttribute('type' , 'password');
        togglebtn.classList.remove('hide')
    }
 }