function commentHere() {
    console.log("shubhssshjdgsjdb");
    var inputCmt = document.querySelector("#comment").value;

    //Create an element  and append to the parent 

    var container = document.createElement('div');
    var child1 = document.createElement('div');
    var child2 = document.createElement('button');

    child1.textContent = inputCmt;
    child2.textContent = "Delete";

    container.style.display = "flex";


    container.textContent = inputCmt;
    container.style.backgroundColor = "tomato";
    container.style.fontSize = "20px";
    container.style.margin = "5px";
    container.style.height = "auto";
    container.style.border = "2px solid white"
    var cmtparent = document.querySelector('#parent');

    cmtparent.appendChild(child1);
    cmtparent.appendChild(child2);

    //cmtparent.insertBefore(container, cmtparent.firstChild);


    document.querySelector("#comment").value = "";
}


function deletecmt() {

}
