// Register -sivun toiminnallisuus

document.forms['register'].addEventListener('submit', registerNewUser);

function registerNewUser(event){

    event.preventDefault();

    const username = document.forms['register']['username'].value;
    const password = document.forms['register']['password'].value;
    const password2 = document.forms['register']['confirmPassword'].value;

    if (username.length <= 0) {
        alert('username is required');
        return;
    }

    if (password.length <= 4) {
        alert('Minimum is 4 characters');
        return;
    }

    if (password.localeCompare(password2) != 0 ){
        alert('Password not matching!');
        return;
    }

    console.log('Registering new user')

    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        console.log(ajax.responseText);
    }
    ajax.open("GET", "backend/registerNewUser.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
    ajax.send("username="+username+"&password="+password);

}