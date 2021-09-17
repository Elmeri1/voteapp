let optionCount = 2;

document.getElementById('addOption').addEventListener('click', addNewOption);

function addNewOption(event){

    event.preventDefault();

    optionCount++;

    // crete new div
    const div = document.createElement('div');
    div.classList.add =('form-group');

    // create new label
    const label = document.createElement('label');
    const forAttribute = document.createAttribute('for');
    const labelText = document.createTextNode(`option3${optionCount}`);
    forAttribute.value = `option3${optionCount}`;
    label.setAttributeNode(forAttribute);
    label.appendChild(labelText);

    // create new input
    const input = document.createElement('input');

    input.classList.add('form-control');

    const inputType = document.createAttribute('type');
    inputType.value = "text";
    input.setAttributeNode(inputType);

    const inputName = document.createAttribute('name');
    inputName.value = `option${optionCount}`;
    input.setAttributeNode(inputName);

    const inputPlaceHolder = document.createAttribute('placeholder');
    inputPlaceHolder.value = `option3${optionCount}`;
    input.setAttributeNode(inputPlaceHolder);
    
    div.appendChild(label);
    div.appendChild(input);

    document.querySelector('fieldset').appendChild(div);
    console.log(div);

}