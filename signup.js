// document
// .querySelector('#hide1')
// .addEventListener("click",function(){
//     $('.hide1').removeClass('hide1')
// });

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

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'login.csv',
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'lang', title: 'LANGUAGE'}
//     ]
// });

// getting user info in array
const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    submitinput = form[0].querySelector('#submits2');

function getDataForm(e){
    e.preventDefault();
    var formData = new FormData(form[0]);
    alert(formData.get('Username')+'-'+formData.get('Password')+'-'+formData.get('University'));
    // console.log(document.querySelector(`.user`).value) ;
    var signup1 = [document.querySelector(`.Username`).value , document.querySelector(`.Password`).value  , document.querySelector(`.University`).value ];
    console.log(signup1);
    // const records = [
    //     {name: 'Bob',  lang: 'French, English'},
    //     {name: 'Mary', lang: 'English'}
    // ];
    
    
    // csvWriter.writeRecords(records) 
}

document.addEventListener('DOMContentLoaded', function(){
    submitinput.addEventListener('click',getDataForm,false);

},false);
