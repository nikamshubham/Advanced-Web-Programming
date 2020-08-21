function GetJSON() {
    // Ajax call to server
    //step 1
    let xhr = new XMLHttpRequest();
    // step 2
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    //step 3

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        DomOperation(refjson);
    }

    //step 3

    /*xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const Jsondoc = xhr.responseText;
            console.log(Jsondoc);
        }
    }
    */
    //step 4
    xhr.send();
}

let DomOperation = (refjson) => {
    console.log(refjson);
    var email = refjson.data[0].email;

    let avatar = refjson.data[0].avatar;
    let parent = document.querySelector("#parentcontrolblock");

    for (let i = 0; i < refjson.data.length; i++) {

        let newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML =

            newElement.style = "flex";
        var name = refjson.data[0].first_name + " " + refjson.data[0].last_name;
;
        //parent.children[0].insertBefore(image, children[0]);
    }

}