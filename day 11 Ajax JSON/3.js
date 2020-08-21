// This method is non blocking thats why it doesnt block below statements

window.addEventListener("load", () => {
    console.log("This event Listner called once the page load");

    const pbc = document.getElementById("Parentblockcontainer");
    //    console.log(pbc);
    //console.log(newElement);

    for (var i = 0; i < 10; i++) {
        var newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "block";
        pbc.insertBefore(newElement, pbc.firstChild);
        //pbc.append(newElement);

    }

})

const pbc = document.getElementById("Parentblockcontainer");
console.log("Hello everyone");