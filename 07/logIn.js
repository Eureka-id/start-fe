const result = document.getElementById('result'); 
const loginBtn = document.querySelector('button[type="submit"]');

const user = {id: 'hello', pw: 'world'};

loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); 

    const inputId = document.querySelector('input[name="id"]').value;  
    const inputPw = document.querySelector('input[name="pw"]').value;

    if (inputId === user.id && inputPw === user.pw) {  
        result.innerText = 'success';  
        result.classList.replace('error', 'success');
    } else {
        result.innerText = 'Login failed'; 
        result.classList.replace('success', 'error');
    }
});