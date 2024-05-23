const error_msg = document.getElementById('error_msg');
const psw_Inp = document.getElementById('psw_Inp');
const email_Inp = document.getElementById('email_Inp');
const submit_btn = document.getElementById('submit_btn');

const check = (password,email) => {
     if(!email.value.includes('@')) {
        error_msg.style.display = 'flex';
        error_msg.textContent = 'Your email must contain "@"';
    }else if(!email.value.includes('.com') ) {
        error_msg.style.display = 'flex';
        error_msg.textContent=" Your email must has  '.com' ";
    }else  if (password.value.length < 8) {
        error_msg.style.display = 'flex';
        error_msg.textContent='Your password must be longer than 8 characters'
    }else{
        error_msg.style.display = 'none';
    }
}

submit_btn.addEventListener('click', (event) => {
    event.preventDefault(); 
    check(psw_Inp,email_Inp);
});
