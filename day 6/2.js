
function dyncomment() {
    let usercomment = document.querySelector(".commentbox").children[2].value;

    let x = document.createElement('div');
    x.style.backgroundColor = 'skyblue';
    x.style.fontSize = '20px'
    x.style.padding = '5px';
    x.style.margin = "4px";
    x.textContent = usercomment;


    document.querySelector('.container').appendChild(x);

}

let likecounter = 1;
function dynlike() {
    let y = document.querySelector("#like");
    y.innerHTML = "like" + likecounter;
    likecounter++;
}