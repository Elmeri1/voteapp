// Register -sivun toiminnallisuus

document.forms['register'].addEventListener('submit', registerNewUser);

function registerNewUser(event){

    event.preventDefault();

    const username = document.forms['register']['username'].value;
    const password = document.forms['register']['password'].value;
    const password2 = document.forms['register']['confirmPassword'].value;

    if (username.length <= 0) {
        showMessage('error','username is required');
        return;
    }

    if (password.length <= 4) {
        showMessage('error','Minimum is 4 characters');
        return;
    }

    if (password.localeCompare(password2) != 0 ){
        showMessage('error','Password not matching!');
        return;
    }

    console.log('Registering new user')

    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        const data = JSON.parse(this.responseText);
        if (data.hasOwnProperty('success')) {
            window.open('login.php');
        } else {
            showMessage('error',data.error);
        }
    }
    ajax.open("POST", "backend/registerNewUser.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
    ajax.send("username="+username+"&password="+password);

}

function showMessage(type, msg){

    let msgBox = document.getElementById("msg");

    if (type == 'succes') {
        msgBox.classList.remove('alert-danger');
        msgBox.classList.add('alert-success');
    } else if(type == 'warning') {
        msgBox.classList.remove('alert-success');
        msgBox.classList.add('alert-danger');
    }

    msgBox.querySelector('p').innerHTML = msg;
    msgBox.classList.remove('d-none');
}