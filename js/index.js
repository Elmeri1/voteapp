// Index-page js

/*
Get all polls from db and show on page
*/
function getPolls(){
    let ajax = new XMLHttpRequest();
    ajax.onload = function() {
        const data = JSON.parse(this.responseText);
        console.log(data);
    }
    ajax.open("GET", "backend/getPolls.php");
    ajax.send();
}