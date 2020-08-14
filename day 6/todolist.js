function add() {
    let x = document.querySelector('#input').value;
    document.querySelector('#to-do-container').innerHTML = x;
}








// Like counter logic

let count = 1;
function like() {
    var likecounter = document.querySelector('#likebtn');
    likecounter.innerHTML = count++;
}
