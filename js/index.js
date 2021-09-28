// Index-page js
window.addEventListener('load', getPolls);
/*
Get all polls from db and show on page
*/
function getPolls(){
    console.log("haetaan dataa")
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        const data = JSON.parse(this.responseText);
        showPolls(data);
    }
    ajax.open("GET", "backend/getPolls.php");
    ajax.send();
}

function showPolls(data){

    console.log(data)

    const ul = document.getElementById("votesUl");

    const now = new Date();

    data.forEach(poll => {

        let start = false;
        let end = false;

        if (poll.start != '0000-00-00 00:00:00'){
            start = new Date(poll.start);
        }
        if (poll.end != '0000-00-00 00:00:00'){
            end = new Date(poll.end);
        }

        console.log(start);
        console.log(end);

        // Show current polls
        if ( (start == false || start <= now) && ( end == false || end >= now) ){

            const newLi = document.createElement('li');
            newLi.classList.add('list-group-item');
    
            const liText = document.createTextNode(poll.topic);
            newLi.appendChild(liText);
    
            ul.appendChild(newLi);
        }

        // Show polls
        if ( end < now && end != false){

            const newLi = document.createElement('li');
            newLi.classList.add('list-group-item');
    
            const liText = document.createTextNode(poll.topic);
            newLi.appendChild(liText);
    
            ul.appendChild(newLi);
        }

        // Show future polls
        if ( end < now && end != false){

            const newLi = document.createElement('li');
            newLi.classList.add('list-group-item');
    
            const liText = document.createTextNode(poll.topic);
            newLi.appendChild(liText);
    
            ul.appendChild(newLi);
        }

    });
}