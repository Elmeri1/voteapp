
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

if (urlParams.has('msg') && urlParams.has('type')) {
    const msg = urlParams.get('msg');
    const type = urlParams.get('type');

    showMessage(type, msg);
}
// Login-button
document.forms['login'].addEventListener('submit', loginUser);

function loginUser(event){
    event.preventDefault();
    const username = document.forms['login']['username'].value;
    const password = document.forms['login']['password'].value;

    if (username.length <= 0) {
        showMessage('error','username is required');
        return;
    }

    if (password.length <= 4) {
        showMessage('error','Minimum is 4 characters');
        return;
    }

    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        const data = JSON.parse(this.responseText);
        if (data.hasOwnProperty('succes')){
            window.location.href = "index.php?type=success&msg=welcome";
            return;
        }
            showMessage('error','kirjautimnen epäonnistui');
        }
        ajaxopen("POST","backend/loginUser.php", true);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ajax.send(`username=${username}&password=${password}`);

}