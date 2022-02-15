let input = document.querySelector('.input');
let button = document.querySelector('.button');
let ul = document.querySelector('.ul-list');
let form = document.querySelector('.form');

form.addEventListener('submit', function(event){
    // the default action that belongs to the event will not occur
    event.preventDefault();

    // 1. get input value
    let value = input.value;

    // 2. add the input value in ul
    let li = document.createElement('li');

    // delete li
    let span = document.createElement('button');
    span.textContent = 'x';
    
    span.addEventListener('click', function() {
        li.remove();
    })

    li.textContent = value;
    li.appendChild(span);
    ul.appendChild(li);

    // 3. clear the input
    input.value = ' ';
})