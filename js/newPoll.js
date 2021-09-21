let optionCount = 2;

document.getElementById('addOption').addEventListener('click', addNewOption);
document.getElementById('deleteLastOption').addEventListener('click', deleteLastOption);
document.forms['newPoll'].addEventListener('submit', createNewPoll);

function createNewPoll(event){
    event.preventDefault();
    console.log('save new poll');

    const topic = document.forms['newPoll']['topic'];
    const start = document.forms['newPoll']['start'];
    const stop = document.forms['newPoll']['stop'];

}

function deleteLastOption(event){

    event.preventDefault();

    if (optionCount <= 2 ) {
        return;
    }

    const optionToDelete = document.querySelector('fieldset').lastElementChild;
    const parentElement = document.querySelector('fieldset');
    parentElement.removeChild(optionToDelete);

    optionCount--;

}

function addNewOption(event){

    event.preventDefault();

    optionCount++;

    // crete new div
    const div = document.createElement('div');
    div.classList.add('form-group');

    // create new label
    const label = document.createElement('label');
    const forAttribute = document.createAttribute('for');
    const labelText = document.createTextNode(`Option${optionCount}`);
    forAttribute.value = `Option${optionCount}`;
    label.setAttributeNode(forAttribute);
    label.appendChild(labelText);
    label.classList.add('form-label');
    label.classList.add('mt-4');

    // create new input
    const input = document.createElement('input');

    input.classList.add('form-control');

    const inputType = document.createAttribute('type');
    inputType.value = "text";
    input.setAttributeNode(inputType);

    const inputName = document.createAttribute('name');
    inputName.value = `Option${optionCount}`;
    input.setAttributeNode(inputName);

    const inputPlaceHolder = document.createAttribute('placeholder');
    inputPlaceHolder.value = `Option${optionCount}`;
    input.setAttributeNode(inputPlaceHolder);
    
    div.appendChild(label);
    div.appendChild(input);

    document.querySelector('fieldset').appendChild(div);
    console.log(div);

}