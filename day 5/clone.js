function commentHere() {
    //  console.log("shubhssshjdgsjdb");
    var usercmt = document.querySelector("#comment").value;

    //Clone an element  and append to the parent 
    // 
    var Ref = document.querySelector('#referenceId').cloneNode(true);
    var parent = document.querySelector('#parent');


    Ref.removeAttribute("id");
    Ref.style.visibility = "visible";
    Ref.children[0].innerHTML = usercmt;
    //parent.appendChild(Ref);

    parent.insertBefore(Ref, parent.firstChild);
    //cmtparent.insertBefore(container, cmtparent.firstChild);

    document.querySelector("#comment").value = "";
}

function deletecmt(currentele) {
    // alert(currentele.parentElement);
    currentele.parentElement.remove();

}