window.addEventListener('scroll', function(){
    const nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});



var typed = new Typed(".typing",{
    strings: [ "Developer", "Blogger", "Marketer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2",{
    strings: [ "Developer", "Blogger", "Marketer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const hamburger = document.querySelector('.openmenu');
const closemenu = document.querySelector('.closemenu');
const mainmenu = document.querySelector('.mainmenu');

hamburger.addEventListener('click', () => {
    mainmenu.classList.toggle('active');
});

mainmenu.addEventListener('click', () => {
    mainmenu.classList.toggle('active');
});


const nameInput = document.querySelector('.name')
const email = document.querySelector('.email')
const subject = document.querySelector('.subject')
const message = document.querySelector('#message')
const form = document.querySelector('form')
const alert = document.querySelector('.alert')

form.addEventListener('submit', submitForm)
function submitForm(e){
    
    if(nameInput.value === '' || email.value === '' || subject.value === '' || message.value === ''){
        clearAlert()
        showAlert('Please fill all fields...', 'error')   
        e.preventDefault();
    }else{
            clearInputs()
        }
    }
    

function showAlert(message, className){
    var div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    document.querySelector(".insert").appendChild(div);
   
    setTimeout(() => div.remove(), 3000);
}

function clearAlert(){
    const currentAlert = document.querySelector(".alert");
        if(currentAlert){
            currentAlert.remove();
     }
}

function clearInputs(){
    nameInput.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
}

