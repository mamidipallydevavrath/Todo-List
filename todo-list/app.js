let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    let items = document.createElement('li');
    items.textContent = input.value;
    
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('list');

    if(input.value.trim() === '') {
        alert('Please enter a valid input');
        return;
    }
    
    items.appendChild(delBtn)
    ul.appendChild(items);

    input.value = '';
});

ul.addEventListener('click', function(event) {
    if(event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
});
