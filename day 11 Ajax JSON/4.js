window.addEventListener("load", () => {
    console.log("After page load this function called");
    //This is parent var inside its child we will append all data
    const pbc = document.querySelector("#parentblockcontainer");


    // creat json object


    for (var i = 1; i < 11; i++) {
        const clone = pbc.children[0].cloneNode(true);
        clone.style.display = "block";
        clone.children[0].innerHTML = "Data" + i;
        pbc.insertBefore(clone, pbc.children[0]);
    }
})