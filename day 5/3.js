let counter = 1;
function dyncomment() {
    let x = document.createElement('div');
    x.style.backgroundColor = 'skyblue';
    x.style.fontSize = '20px'
    x.style.padding = '5px';
    x.style.margin = "4px";
    x.textContent = "Hello comment no " + counter;
    document.querySelector('.parent').appendChild(x);
    counter++;
}

let likecounter = 1;
function dynlike() {
    let y = document.querySelector("#like");
    y.innerHTML = "like" + likecounter;
    likecounter++;
}