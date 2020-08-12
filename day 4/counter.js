
function increment() {
    let counter = document.querySelector('body').children[0].children[0].innerHTML;
    let a = document.querySelector('#count');
    counter++;
    a.innerHTML = counter;
}


function decrement() {
    let counter = document.querySelector('body').children[0].children[0].innerHTML;
    let a = document.querySelector('#count');
    counter--;
    a.innerHTML = counter;
}