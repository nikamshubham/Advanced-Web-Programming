window.addEventListener("load", () => {


    console.log("After page load this function called");
    //This is parent var inside its child we will append all data
    const pbc = document.querySelector("#parentblockcontainer");


    // creat json object
    let postList = [
        { id: 1, post: "Hello Rahul" },
        { id: 2, post: "Hello karan" },
        { id: 3, post: "Hello pratik" },
        { id: 4, post: "Hello sayali" },
        { id: 5, post: "Hello arjun" },
        { id: 6, post: "Hello karan" },
        { id: 7, post: "Hello ankit" },
        { id: 8, post: "Hello yash" },
        { id: 9, post: "Hello Shubham" },
        { id: 10, post: "Hello Aish" },
    ];


    for (var i = 0; i < postList.length; i++) {
        var item = postList[i];

        const clone = pbc.children[0].cloneNode(true);
        clone.style.display = "block";
        clone.children[0].innerHTML = item.post;
        pbc.insertBefore(clone, pbc.children[0]);
    }
})
