// results.js

// Check query params
const pollQueryString = window.location.search;
console.group(pollQueryString);

const pollParams = new URLSearchParams(pollQueryString);

if (pollParams.has('id')){

    getPollData(pollParams.get('id'));

}

function getPollData(id){
    console.log(id);
    let ajax = new XMLHttpRequest();
    ajax.onload = function(){
        data = JSON.parse(this.responseText);
        console.log(data);
        showResults(data);
    }
    ajax.open("GET", "backend/getPoll.php?id=" + id);
    ajax.send();
}

function showResults(data){
    document.querySelector('h1').innerHTML = data.topic;

    const ul = document.getElementById('optionsUl');
    data.options.forEach(function(option){
    
        const newLi = document.createElement('li');
        newLi.className = 'list-group-item';

        const newSpan = document.createElement('span');
        newSpan.className = 'badge bg-primary rounded-pill float-right';
        
        const spanText = document.createTextNode(option.votes);
        const liText = document.createTextNode(option.name);
        
        newSpan.appendChild(spanText);
        newLi.appendChild(liText);
        newLi.appendChild(newSpan);
        ul.appendChild(newLi);
    });
}