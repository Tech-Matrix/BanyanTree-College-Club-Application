//eye visiblity
var eye = document.getElementById(`hide1`);
var eye_sl = document.getElementById(`hide2`);

var password = document.querySelector('.Password');

    // for eye slash
eye_sl.addEventListener("click",function(){
    eye.style.removeProperty("display");
    eye_sl.style.display = 'none';
    password.type = 'text';
    
})

    // for eye
eye.addEventListener("click",function(){
    eye_sl.style.removeProperty("display");
    eye.style.display = 'none';
    password.type = 'password';
})

const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    submitinput = form[0].querySelector('#submits2');

function getDataForm(e){
    e.preventDefault();
    var formData = new FormData(form[0]);
    // alert(formData.get('Username')+'-'+formData.get('Password')+'-'+formData.get('University'));
    var signup1 = [document.querySelector(`.Username`).value , document.querySelector(`.Password`).value  , document.querySelector(`.University`).value ];
    console.log(signup1);
    if((document.querySelector(`.Username`).value) == '')
        document.querySelector(`.user_error`).innerHTML = '* Please enter a Username';
    else
        document.querySelector(`.user_error`).innerHTML = '';

    
    if((document.querySelector(`.Password`).value) == '')
        document.querySelector(`.password_error`).innerHTML = '* Please enter a Password';
    else
        document.querySelector(`.password_error`).innerHTML = '';

    if((document.querySelector(`.University`).value) == '')
        document.querySelector(`.University_error`).innerHTML = '* Please enter a University';
    else
    document.querySelector(`.University_error`).innerHTML = '';

}

document.addEventListener('DOMContentLoaded', function(){
    submitinput.addEventListener('click',getDataForm,false);

},false);
