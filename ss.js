let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let message = document.getElementById('message');
let btn = document.getElementById('button');

function dataSave(){
    if(firstname.value !== '' & lastname.value !== '' & email.value !== '' & mobile.value !== '' & message.value !== ''){
        let contact = {
            frname: firstname.value,
            lsname: lastname.value,
            mail: email.value,
            phone: mobile.value,
            msg: message.value,
        }
        localStorage.setItem('contact', JSON.stringify(contact));
    }
};

btn.onclick = function(){
    dataSave();
}
