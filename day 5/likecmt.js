function commentHere() {

    var inputCmt = document.querySelector("#comment").value;

    //Create an element  and append to the parent 

    var container = document.createElement('div');
    container.textContent = inputCmt;
    container.style.backgroundColor = "tomato";
    container.style.fontSize = "20px";
    container.style.margin = "5px";
    container.style.height = "auto";
    container.style.border = "2px solid white"
    var cmtparent = document.querySelector('#parent');
    //cmtparent.appendChild(container);
    cmtparent.insertBefore(container, cmtparent.firstChild);
    document.querySelector("#comment").value = "";
}

